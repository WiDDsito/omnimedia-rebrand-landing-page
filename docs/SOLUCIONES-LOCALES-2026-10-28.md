# Soluciones: primera capa de vistas locales

Fecha: 28 de octubre de 2026. Estado: implementación local para revisión; sin publicación en GitHub ni Vercel.

## Alcance

Se incorporan cuatro vistas iniciales con la identidad de la propuesta: títulos Satoshi destacados, fondo tenue, rojo como acento, contenido legible y animaciones reversibles al recorrer la página.

| Vista | Ruta local | Enlaces grandes |
| --- | --- | --- |
| Telefonía empresarial | `/soluciones/telefonia-empresarial/` | 7 |
| Videoconferencia | `/soluciones/videoconferencia/` | 6 |
| Perifoneo y megafonía | `/soluciones/perifoneo-y-megafonia/` | 4 |
| Atención al cliente | `/soluciones/atencion-al-cliente/` | 7 |

Cada vista incluye breadcrumb, presentación inicial, imagen referencial del portafolio, introducción, tres aspectos orientativos, enlaces grandes a categorías, llamada a asesoría y navegación a las otras soluciones. Perifoneo conserva un alcance informativo básico.

El menú Soluciones presenta las cuatro vistas. Las tarjetas de la portada y el pie enlazan a estas rutas locales. Los subenlaces de cada vista conservan sus destinos informativos originales, incluida la web de Líneas SIP Trunk. Las páginas de detalle se adaptarán en una siguiente capa. No se incorpora tienda, carrito, checkout ni envío real de formularios.

## Apertura suave del menú

El panel usa una transición de opacidad y desplazamiento corto: apertura de 380 ms y cierre de 260 ms, con desaceleración. En móvil, los desplegables internos animan también su altura. El panel permanece montado hasta terminar el cierre; si se pulsa durante una transición, continúa desde su estado visual actual. Los paneles cerrados o en salida quedan inactivos para el teclado. Se respeta `prefers-reduced-motion` y se mantienen los cierres por Escape, selección de enlace y clic exterior.

## Contenido de referencia

Se adaptó el contenido informativo de estas páginas, sin trasladar precios ni promesas de disponibilidad o rendimiento:

- [Telefonía](https://www.omnimediaperu.com/telefonia/)
- [Videoconferencia](https://www.omnimediaperu.com/productos/equipos-y-camaras-de-videoconferencia-poly-yealink-logitech/)
- [Perifoneo](https://www.omnimediaperu.com/telefonia/equipos-de-perifoneo/)
- [Plataformas para contacto masivo](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/)

## Verificación

- `npm run check`: 41 archivos, sin errores, advertencias ni sugerencias.
- `npm test`: 13 pruebas aprobadas, incluyendo las cuatro rutas, la estructura de sus contenidos y la exclusión de enlaces de comercio.
- `npm run build`: cinco páginas estáticas generadas (portada y cuatro soluciones).
- Navegación real en navegador: apertura y cierre, pulsaciones consecutivas, Escape en dos niveles de móvil, acceso desde el menú y navegación entre soluciones y portada.
- Revisión visual a 1280 px, 390 px y 320 px; sin desbordamiento horizontal en las vistas móviles revisadas. Imágenes cargadas y sin errores ni advertencias de consola observados.
- Capturas en `docs/screenshots/local-2026-10-28/`.

Todas las vistas mantienen `noindex, nofollow` de la propuesta. Las rutas nuevas pertenecen a la maqueta local: no sustituyen rutas en producción ni constituyen una migración SEO. La aprobación para publicar en GitHub y después en Vercel sigue pendiente del usuario.
