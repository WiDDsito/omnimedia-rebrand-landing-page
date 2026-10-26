# OmniMedia Perú · Landing comercial

Vista preliminar del rediseño comercial de OmniMedia Perú, desarrollada con Astro y GSAP. Incluye navegación agrupada, carrusel de marcas, soluciones con imágenes tenues, bento de servicios, transiciones bidireccionales y botón de regreso al inicio.

## Desarrollo local

Requiere Node.js 22.12 o superior. Vercel está configurado para Node.js 24.

```sh
npm ci
npm run dev
```

## Verificación

```sh
npm run check
npm test
npm run build
npm run preview
```

## Estructura

- `src/components/`: secciones y componentes Astro.
- `src/data/content.ts`: contenido y enlaces comerciales.
- `src/scripts/`: navegación, animaciones y regreso al inicio.
- `src/lib/`: validación del formulario y lógica de animación/desplazamiento.
- `tests/`: pruebas de regresión.
- `public/`: recursos estáticos.
- `vercel.json`: configuración del despliegue.

## Vista preliminar

Esta versión mantiene `noindex, nofollow` en HTML y en las respuestas de Vercel. El formulario valida y prepara un resumen local: no envía solicitudes ni almacena datos. Las categorías enlazan al sitio actual.

La imagen del hero es conceptual. Las imágenes de productos y el logo proceden del sitio público de OmniMedia; se deben validar los originales antes de una publicación comercial definitiva.

La web actual, su dominio y su alojamiento no forman parte de este despliegue. Consulta [README-DESARROLLO.md](README-DESARROLLO.md) y [la verificación](docs/VERIFICACION-PREVIEW.md) para más detalle.
