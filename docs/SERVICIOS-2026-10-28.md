# Servicios: vistas iniciales

Fecha: 28 de octubre de 2026. Rama de trabajo: `services-section`, creada por el usuario y basada en el `develop` actualizado.

## Rutas y contenido

- `/servicios/`: portada con presentación, dos accesos a los servicios y asesoría.
- `/servicios/soporte-tecnico/`: información inicial sobre revisión, configuración y mantenimiento de telefonía IP, con modalidad de atención y condiciones sujetas a evaluación. Incluye tres enlaces grandes al servicio original, información de mantenimiento y contacto.
- `/servicios/audios-e-ivr/`: información inicial sobre bienvenida, espera, horarios e IVR. Incluye cuatro enlaces a muestras originales, información completa del servicio y contacto. Los archivos no se reproducen automáticamente ni se descargan durante la carga de la página.

Las vistas reutilizan `CategoryView.astro`, la tipografía y las animaciones de Soluciones y Productos. El nombre del servicio aparece en rojo y con una escala menor que el H1. Se usan imágenes WebP referenciales existentes, identificadas como tales.

El desplegable conserva su disposición vertical y los destinos originales mediante «Ver servicio original». Los títulos de cada servicio, el enlace principal del menú, el bloque comercial de la portada y el pie llevan a las nuevas vistas locales. El bento de cuatro pasos de la portada conserva su contenido y diseño.

La plantilla compartida permite una descripción específica del bloque de enlaces y una etiqueta accesible para los enlaces de audio. Los valores por defecto de Soluciones y Productos se conservan.

No se integran tienda ni formularios de envío. Se mantienen las rutas originales enlazadas y el estado `noindex, nofollow` de la propuesta. No se modifica la web original ni se promociona manualmente a producción.

## Fuentes

- [Servicios](https://www.omnimediaperu.com/servicios/)
- [Soporte técnico](https://www.omnimediaperu.com/servicios/soporte-tecnico/)
- [Audios para centrales telefónicas](https://www.omnimediaperu.com/telefonia/audios-para-centrales-telefonicas/)

## Validación

- Astro check: 51 archivos; sin errores, advertencias ni hints.
- 17 pruebas aprobadas. La nueva prueba cubre las dos familias del menú, rutas únicas, conservación de URLs originales, estructura de contenido, imágenes WebP y las cuatro muestras etiquetadas como audio. Se verificó que detecta una ruta de servicio inválida.
- Build: 15 páginas estáticas.
- Auditoría del HTML: un H1 y `noindex, nofollow` por página; enlaces y anclas locales válidos.
- Las cuatro muestras originales responden a HEAD con HTTP 200 y tipo `audio/mpeg`.
- Navegador: acceso desde el header, navegación entre los servicios, regreso a la portada de Servicios, menú móvil y carga de imágenes. Sin errores ni advertencias de consola observados.
- Revisión visual a 1280, 768 y 320 px, sin desbordamiento horizontal observado. Capturas en `docs/screenshots/servicios-2026-10-28/`.

El flujo de publicación consiste en commit y push a `services-section`, PR dirigido a `develop`, comprobación automática de Vercel y fusión del SHA revisado. `main` permanece fuera de esta integración.
