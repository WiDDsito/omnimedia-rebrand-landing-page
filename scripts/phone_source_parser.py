from html.parser import HTMLParser
import re,json
from pathlib import Path
class Node:
 def __init__(self,tag='',attrs=None,parent=None,pos=0):self.tag=tag;self.a=dict(attrs or []);self.parent=parent;self.children=[];self.pos=pos;self.end=pos
 def text(self):return re.sub(r'\s+',' ',''.join(c.text() if isinstance(c,Node) else c for c in self.children)).strip()
 def has(self,cls):return cls in self.a.get('class','').split()
class Tree(HTMLParser):
 def __init__(self,html):super().__init__(convert_charrefs=True);self.root=Node();self.stack=[self.root];self.nodes=[];self.feed(html)
 def handle_starttag(self,t,a):
  n=Node(t,a,self.stack[-1],len(self.nodes));self.nodes.append(n);self.stack[-1].children.append(n)
  if t not in ['img','input','br','hr','meta','link','source','wbr','embed','area','param','col']:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:
    for n in self.stack[i:]:n.end=len(self.nodes)
    self.stack=self.stack[:i];break
 def handle_data(self,d):self.stack[-1].children.append(d+' ')
def attrs_images(n):return n.a.get('data-src') or n.a.get('src') or ''
