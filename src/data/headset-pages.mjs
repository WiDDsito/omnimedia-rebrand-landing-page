import equipment from './headset-equipment.json' with { type: 'json' };

/** @type {Record<string, {id: string, title: string, group: string, description: string, features: string[], pdf: string | null, image: string, imageAlt: string, note: string}[]>} */
const equipmentByBrand = equipment;
export const headsetCatalogPath = '/productos/auriculares/';
const root = '/telefonia/headset-auriculares/';
const pages = [
  {
    id: 'yealink',
    title: 'Auriculares Yealink',
    path: `${root}audifonos-auriculares-yealink/`,
    headline: 'Encuentra tu forma de conversar.',
    description:
      'Auriculares USB, alternativas Bluetooth y audio para reuniones del portafolio Yealink.',
    image: 'headsets/yealink-4.webp',
    imageAlt: 'Auricular inalámbrico Yealink BH70',
    imageNote: 'BH70. Imagen del catálogo original.',
    introTitle: 'Del escritorio a una jornada en movimiento.',
    introduction: [
      'Explora las familias UH y BH para llamadas y trabajo híbrido. La selección también incluye el altavoz SP96 para reuniones.',
      'Compara conexión y formato. Confirma la variante y su compatibilidad con los dispositivos que utilizarás.',
    ],
    points: [
      ['Tu equipo', 'Revisa las conexiones que utilizarás.'],
      ['Tu jornada', 'Considera si necesitas movilidad.'],
      ['Tu plataforma', 'Confirma funciones y certificaciones de cada variante.'],
    ],
  },
  {
    id: 'vt',
    title: 'Auriculares VT',
    path: `${root}headset-auriculares-vt/`,
    headline: 'Más claridad en tu jornada.',
    description:
      'Formatos monoaurales, biaurales y Bluetooth para evaluar según tu forma de trabajar.',
    image: 'headsets/vt-11.webp',
    imageAlt: 'Auricular VT9200BT biaural',
    imageNote: 'VT9200BT. Imagen del catálogo original.',
    introTitle: 'Elige el formato para cada puesto.',
    introduction: [
      'Compara los auriculares VT y sus conexiones según versión.',
      'El portafolio incluye el altavoz CS61 y el adaptador BT100U. Confirma la compatibilidad antes de elegir.',
    ],
    points: [
      ['Formato', 'Evalúa uno o dos auriculares.'],
      ['Conexión', 'Confirma el conector del modelo.'],
      ['Uso', 'Considera el entorno de trabajo.'],
    ],
  },
];
export const headsetPages = pages.map((page) => ({
  ...page,
  icon: 'chat',
  source: `https://www.omnimediaperu.com${page.path}`,
  equipment: equipmentByBrand[page.id],
  linksTitle: 'Sigue explorando audio para tu empresa.',
  links: [
    ...pages
      .filter((item) => item.id !== page.id)
      .map((item) => ({
        title: item.title,
        description: item.description,
        href: item.path,
        actionLabel: 'Explorar la marca',
      })),
    {
      title: 'Asesoría para tu equipo',
      description: 'Comparte el modelo y los dispositivos con los que necesitas usarlo.',
      href: '/contactenos/',
      actionLabel: 'Ver canales de contacto',
    },
  ],
}));
const localPaths = new Map([
  [`https://www.omnimediaperu.com${root}`, headsetCatalogPath],
  ...headsetPages.map((page) => [page.source, page.path]),
]);
export const localHeadsetHref = (href) => localPaths.get(href) ?? href;
