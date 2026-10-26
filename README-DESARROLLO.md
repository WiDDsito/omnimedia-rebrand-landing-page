# OmniMedia Perú · Vista preliminar en Astro

Esta es una implementación local para revisar la nueva portada comercial. Los documentos de estrategia originales permanecen en la raíz del proyecto del disco externo.

## Abrir y editar

Requisitos: Node.js 22.12 o superior, compatible con Astro 7; se verificó con Node 26.0.0. Desde el directorio del proyecto:

```sh
npm ci
npm run dev
```

La consola mostrará la dirección local. Para generar y revisar la versión estática:

```sh
npm run check
npm test
npm run build
npm run preview
```

`.npmrc` desactiva enlaces de ejecutables para facilitar instalación en discos externos. Los scripts llaman a Astro directamente. `package-lock.json` fija las dependencias.

## Qué incluye

- Hero gris tenue, logo actual e imagen conceptual de sala de reuniones.
- Desplegables Soluciones y Equipos; grupos expandibles en móvil.
- Secciones de soluciones, catálogo, servicios, empresa, preguntas y contacto.
- GSAP para entradas breves; CSS para interacciones; movimiento reducido respetado.
- Formulario de demostración con validación y resumen local. No hay API, correo, almacenamiento ni analítica conectados.
- Enlaces de categorías hacia las URLs actuales de OmniMedia.
- Contenido HTML generado y fuentes locales.

## Archivos principales

- `src/data/content.ts`: soluciones, equipos, enlaces y preguntas.
- `src/components/`: secciones de la landing.
- `src/styles/global.css`: paleta, tipografía, responsive y estados.
- `src/scripts/main.ts`: navegación, movimiento y formulario.
- `src/lib/quote.mjs`: validación y resumen.
- `src/layouts/BaseLayout.astro`: metadatos de vista preliminar.
- `docs/VERIFICACION-PREVIEW.md`: comprobaciones y límites.
- `docs/screenshots/`: capturas de escritorio y móvil.
- `dist/`: versión estática compilada, incluida para revisión local; regenerar después de editar.

## Antes de cualquier publicación futura

La versión está marcada con `noindex, nofollow` y robots restrictivo. Además, la política `form-action 'none'` evita que un envío nativo accidental saque los datos del formulario. Esta configuración es deliberada para la vista preliminar y requiere revisión al conectar un flujo real.

No se debe copiar este `dist/` encima del sitio actual: contiene solo la portada. La integración con Tu Web Activa, metadatos definitivos, conservación de contenido, enlaces y recepción real deben seguir el checklist SEO del proyecto.

El titular es una propuesta editorial para la vista preliminar. Los metadatos actuales de producción no se han cambiado. La futura publicación requiere reconciliar contenido y consultas con Search Console.

## Imágenes

Logo e imágenes de productos: archivos públicos del sitio de OmniMedia, con fuentes en `docs/assets-sources.json`; confirmar derechos y archivos originales antes de publicación.

Hero: imagen conceptual generada con la herramienta integrada de generación de imágenes, guardada en `src/assets/meeting-room.png`. No representa un proyecto o una oficina real de OmniMedia. El prompt final y la procedencia están en `docs/hero-image.md`.
