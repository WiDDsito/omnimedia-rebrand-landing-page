import { gsap } from 'gsap';
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-navigation');
const dropdowns = [...document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown')];
function closeNavigation(returnFocus = false) {
 navigation?.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded', 'false');
 dropdowns.forEach(d => d.open = false);
 if(returnFocus) menuButton?.focus();
}
menuButton?.addEventListener('click', () => {
 const open = menuButton.getAttribute('aria-expanded') !== 'true';
 navigation?.classList.toggle('is-open', open); menuButton.setAttribute('aria-expanded', String(open));
 if(!open) dropdowns.forEach(d=>d.open=false);
});
dropdowns.forEach(d => d.addEventListener('toggle', () => {
 if(d.open) dropdowns.forEach(other=>{if(other!==d) other.open=false;});
}));
document.addEventListener('click', event => {
 const target=event.target as HTMLElement;
 if(!target.closest('.site-header')) closeNavigation();
 if(target.closest('#main-navigation a')) closeNavigation();
});
document.addEventListener('keydown', event => {
 if(event.key!=='Escape')return;
 const open=dropdowns.find(d=>d.open);
 if(open){open.open=false;open.querySelector('summary')?.focus();}
 else if(menuButton?.getAttribute('aria-expanded')==='true')closeNavigation(true);
});
navigation?.addEventListener('focusout', event=>{
 if(event.relatedTarget instanceof Node && !navigation.contains(event.relatedTarget))dropdowns.forEach(d=>d.open=false);
});
matchMedia('(min-width: 901px)').addEventListener('change',()=>closeNavigation());
const mm=gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)',()=>{
 gsap.from('.hero-copy > *',{y:14,duration:.65,stagger:.07,ease:'power2.out',clearProps:'transform'});
 gsap.from('.hero-visual',{y:18,duration:.9,ease:'power2.out',clearProps:'transform'});
});
