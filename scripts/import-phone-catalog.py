"""Normalize a cached public OmniMedia catalog; no network calls during build.
Usage: python3 scripts/import-phone-catalog.py /path/to/source-cache
The cache contains the HTML of the six brand pages and product URLs listed in
fetch-report.json. Only factual specifications are retained, not store actions.
"""
import sys,re,json,hashlib,unicodedata
from pathlib import Path
from urllib.parse import urlsplit
from phone_source_parser import Tree,Node,attrs_images
ROOT=Path(__file__).resolve().parents[1]
CACHE=Path(sys.argv[1]);ORIGIN='https://www.omnimediaperu.com'
BRAND_KEYS=['avaya','fanvil','poly','yealink','grandstream','panasonic','samsung']
BRAND_LABELS={'avaya':'Avaya','fanvil':'Fanvil','poly':'Poly HP','yealink':'Yealink','grandstream':'Grandstream','panasonic':'Panasonic','samsung':'Samsung'}
NAV=json.loads((ROOT/'src/data/navigation.json').read_text())
family=next(i for i in NAV if i['id']=='products')['children'][0]
brandnav={k:next((c for c in family['children'] if k in c['url']),None) for k in BRAND_KEYS}
brands=[dict(id=k,title=BRAND_LABELS[k],path=urlsplit(brandnav[k]['url']).path if brandnav[k] else '/telefonia/telefonos-analogicos-digitales-ip/telefonos-samsung/',source=brandnav[k]['url'] if brandnav[k] else '') for k in BRAND_KEYS]
def clean(s):return re.sub(r'\s+',' ',s).strip(' \u2022\u25aa>*-')
def raw(n):
 if not isinstance(n,Node):return n
 if n.tag=='br':return '\n'
 return ''.join(raw(c) for c in n.children)
def slug(s):return re.sub('[^a-z0-9]+','-',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()).strip('-')
def brandof(s):
 s=s.lower().replace('gandstream','grandstream')
 if re.search(r'\b(?:gxp|grp|gxv|gac)\s?\d',s):return 'grandstream'
 return next((b for b in BRAND_KEYS if b in s),'')
def specs(nodes):
 rows=[clean(n.text()) for n in nodes if n.tag=='li' and len(n.text().split())<=55]
 if not rows:
  for n in nodes:
   if n.tag=='p':rows+= [clean(s) for s in re.split(r'[\n\u2022\u25aa>]|(?<=\.)\s+(?=[A-ZÁÉÍÓÚ])',raw(n)) if len(clean(s))>10]
 out=[];words=0
 for s in rows:
  if not s or len(s.split())>55 or re.search(r'(?i)(cotiza|carrito|compra|garantiz|mejor del|líder|omnimedia|es ideal|solicitar|revolucion|diseñado para|diseñada para)',s):continue
  s=re.split(r'(?i),?\s+(?:lo que |que (?:permite|garantiza|facilita)|proporcionando|ofreciendo)',s)[0].rstrip(' ,.;')
  if len(s.split())>28:
   if ':' in s:s=s.split(':')[0]+': consultar detalle en la ficha original'
   else:continue
  if s.lower() in [x.lower() for x in out]:continue
  if words+len(s.split())>150:break
  out.append(s);words+=len(s.split())
  if len(out)==10:break
 return out
# Brand section metadata complements individual product pages and missing models.
sections=[]
for b in brands:
 if not b['source']:continue
 f=CACHE/(b['source'].rstrip('/').split('/')[-1]+'.html');t=Tree(f.read_text())
 hs=[n for n in t.nodes if n.tag in ['h1','h2','h3'] and re.search(r'(?i)(?:^AVAYA SIP J|^AVAYA B\d|^TELEFONO.*\d)',n.text())]
 for i,h in enumerate(hs):
  end=hs[i+1].pos if i+1<len(hs) else next((n.pos for n in t.nodes[h.pos+1:] if n.tag=='h1' and n.text()=='SOLUCIONES EN TELECOMUNICACIONES'),len(t.nodes))
  ns=t.nodes[h.end:end];pdfs=list(dict.fromkeys(n.a['href'].replace('hhttps://','https://',1) for n in ns if n.tag=='a' and '.pdf' in n.a.get('href','')))
  imgs=[attrs_images(n) for n in t.nodes[max(0,h.pos-15):h.pos] if n.tag=='img' and 'uploads/' in attrs_images(n)]
  model=h.text().upper()
  model=re.sub(r'^TELEFONO(?: INALAMBRICO)?\s*','',model);model=re.sub(r'(AVAYA SIP|POLY\s*[–-]?\s*HP|HP POLY|GANDSTREAM|GRANDSTREAM|FANVIL|YEALINK|PANASONIC)','',model).strip()
  model=re.sub(r'\bMICROSFT TEAMS\b','Teams',model).strip();model=re.sub(r'\s+',' ',model)
  sections.append(dict(brand=b['id'],model=model,heading=h.text(),source=b['source'],features=specs(ns),pdfs=pdfs,imageSource=imgs[-1] if imgs else ''))
products=[]
for url,status in json.loads((CACHE/'fetch-report.json').read_text()):
 t=Tree((CACHE/(url.rstrip('/').split('/')[-1]+'.html')).read_text())
 titleNode=next(n for n in t.nodes if n.tag=='h1' and re.match(r'(?i)^tel[eé]fono',n.text()))
 title=clean(titleNode.text());brand=brandof(title+' '+url)
 if not brand:raise ValueError('Unknown brand '+url)
 end=next((n.pos for n in t.nodes[titleNode.end:] if n.tag=='h2' and n.text() in ['EQUIPOS','SERVICIOS Y EQUIPOS']),len(t.nodes))
 ns=t.nodes[titleNode.end:end];desc=next((n for n in ns if n.a.get('id')=='tab-description'),None)
 specnodes=t.nodes[desc.pos:desc.end] if desc else ns
 features=specs(specnodes)
 pdfs=list(dict.fromkeys(n.a['href'].replace('hhttps://','https://',1) for n in ns if n.tag=='a' and '.pdf' in n.a.get('href','')))
 img=next((attrs_images(n) for n in t.nodes[:end] if n.tag=='img' and n.has('wp-post-image') and 'uploads/' in attrs_images(n)), '')
 # Product identifiers are kept as published; technical names are normalized for matching.
 model=re.sub(r'(?i)^tel[eé]fono\s*(?:de |ip |sip |digital |analogico |analógico |conferencia |audioconferencia |inalambrico |inalámbrico |consola sip )*','',title)
 model=re.sub(r'(?i)^(?:hp )?(?:avaya|fanvil|polycom|poly|yealink|grandstream|panasonic|samsung)\s*','',model)
 model=clean(model).removesuffix(' Fanvil');norm=re.sub('[^A-Z0-9]','',model.upper()).replace('NUEVO','').replace('SEMINUEVO','')
 matched=next((s for s in sections if s['brand']==brand and norm and norm in re.sub('[^A-Z0-9]','',s['model'])),None)
 if matched:
  pdfs=list(dict.fromkeys(pdfs+matched['pdfs']))
  if not features:features=matched['features']
 if not img and matched:img=matched['imageSource']
 record=dict(id=url.rstrip('/').split('/')[-1],slug=url.rstrip('/').split('/')[-1],path=urlsplit(url).path,source=url,brand=brand,title=title,model=model,features=features,pdfs=pdfs,imageSource=img,sharedFeatures=False)
 products.append(record)
# Expand group names into individual model views, preserving the published group path.
groups={
 'telefono-poly-edge-b10-b20':['EDGE B10','EDGE B20'],
 'telefono-yealink-gxp1610-gxp1615-gxp1620-gxp1625':['GXP1610','GXP1615','GXP1620','GXP1625'],
 'telefono-grandstream-grp2612w-grp2612p':['GRP2612W','GRP2612P'],
 'telefono-grandstream-grp2601-p-w':['GRP2601','GRP2601P','GRP2601W'],
}
for p in list(products):
 if p['id'] not in groups:continue
 members=groups[p['id']];p['variantGroup']=members;p['sharedFeatures']=True;p['model']=members[0];p['title']='Teléfono '+BRAND_LABELS[p['brand']]+' '+members[0]
 for model in members[1:]:
  extra=p.copy();extra.update(id='telefono-'+p['brand']+'-'+slug(model),slug='telefono-'+p['brand']+'-'+slug(model),path='/producto/telefono-'+p['brand']+'-'+slug(model)+'/',model=model,title='Teléfono '+BRAND_LABELS[p['brand']]+' '+model);products.append(extra)
# Missing brand-only models retain an explicit source and do not invent specifications.
manual=[('fanvil','V62 PRO'),('fanvil','V66 PRO'),('avaya','J179 TSG'),('poly','CCX400 Teams'),('panasonic','KX TG3451'),('panasonic','KX TG3452'),('panasonic','KX-KG3711'),('panasonic','KX-TG3721')]
# Normalize KX TG naming only for matching, preserve original source identifiers.
for brand,model in manual:
 norm=re.sub('[^A-Z0-9]','',model.upper())
 if any(p['brand']==brand and re.sub('[^A-Z0-9]','',p['model'].upper())==norm for p in products):continue
 section=next((s for s in sections if s['brand']==brand and norm in re.sub('[^A-Z0-9]','',s['model'].upper())),None)
 if section is None:continue
 code='telefono-'+brand+'-'+slug(model);products.append(dict(id=code,slug=code,path='/producto/'+code+'/',source=section['source'],brand=brand,title='Teléfono '+BRAND_LABELS[brand]+' '+model,model=model,features=section['features'],pdfs=section['pdfs'],imageSource=section['imageSource'],sharedFeatures='/' in section['model'],variantGroup=[section['model']]))
for p in products:
 p['image']='phones/'+hashlib.sha256(p['imageSource'].encode()).hexdigest()[:16]+'.webp' if p['imageSource'] else 'phone.webp'
 p['description']=f"Conoce el {p['title'].lower()}: características publicadas, documentación y asesoría para tu instalación."
 # Keep at most 150 words of factual feature data per product source.
 p['imageIsReference']=not bool(p['imageSource'])
# Sparse legacy descriptions are normalized into factual attributes, preserving provenance.
manual_specs = {
 'telefono-samsung-ds-5007s': ['7 teclas programables', 'Pantalla LCD de 2 líneas', 'Indicadores LED tricolores'],
 'telefono-samsung-smt-i3100': ['Terminal de telefonía IP', 'Sistemas publicados: SCMS, SCME y OfficeServ 7000', 'Condición publicada: equipo seminuevo'],
 'telefono-yealink-t19p': ['Modelo publicado: Yealink T19P E2', 'Pantalla LCD gráfica de 132 × 64 píxeles', 'Visualización de 5 líneas'],
 'telefono-panasonic-kx-tg3721': ['Teléfono inalámbrico de 2,4 GHz', 'Contestador con contador de mensajes', 'Altavoz manos libres en el auricular', 'Modo nocturno', 'Identificador de llamadas: memoria de hasta 50 números'],
 'telefono-panasonic-kx-tg3451': ['Teléfono inalámbrico', 'Diseño antimanchas', 'Características publicadas para la familia KX-TG3451 / KX-TG3452'],
 'telefono-panasonic-kx-tg3452': ['Teléfono inalámbrico', 'Diseño antimanchas', 'Características publicadas para la familia KX-TG3451 / KX-TG3452'],
 'telefono-panasonic-kx-kg3711': ['Teléfono inalámbrico', 'Altavoz manos libres en el auricular', 'Modo nocturno', 'Teclado suave al tacto'],
}
for p in products:
 if p['id'] in manual_specs:p['features']=manual_specs[p['id']]
 if p['id'] in ['telefono-avaya-1120e-nuevo','telefono-avaya-1408-nuevo']:
  other=next(x for x in products if x['id']==p['id'].removesuffix('-nuevo'))
  p['features']=other['features'];p['specificationSource']=other['source']
 if p['id']=='telefono-panasonic-kx-kg3711':
  p['model']='KX-TG3711';p['title']='Teléfono Panasonic KX-TG3711'
  p['sourceNote']='La fuente usa KX-KG3711 en el encabezado y KX-TG3711 en la descripción. Confirma la referencia al solicitar información.'
for p in products:
 if p['id']=='telefono-fanvil-v62-pro':p['features']=['Auricular inalámbrico Bluetooth', 'Pantalla a color HD', 'Audio HD', 'Puertos Gigabit', 'Alimentación PoE integrada']
 if p['id']=='telefono-fanvil-v66-pro':p['features']=['Auricular inalámbrico Bluetooth', 'Pantalla táctil IPS de 7 pulgadas', 'Wi-Fi 6 integrado', 'Bluetooth 5.4 integrado', 'Comunicaciones de voz y video']
products.sort(key=lambda p:(p['brand'],p['model'].lower(),p['id']))
out=dict(checkedAt='2026-10-29',brands=brands,products=products)
manifest=dict(checkedAt='2026-10-29', originalProductSources=[u for u,status in json.loads((CACHE/'fetch-report.json').read_text())], records=[dict(id=p['id'],source=p['source'],imageSource=p.pop('imageSource'),pdfs=p['pdfs']) for p in products])
(ROOT/'docs/PHONE-CATALOG-SOURCES.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(ROOT/'src/data/phone-catalog.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
(CACHE/'sections.json').write_text(json.dumps(sections,ensure_ascii=False,indent=2))
print('Products',len(products),'by brand',{b:len([p for p in products if p['brand']==b]) for b in BRAND_KEYS})
print('No specifications',[(p['id'],p['source']) for p in products if not p['features']]);print('No image',[(p['id']) for p in products if p['imageIsReference']])
