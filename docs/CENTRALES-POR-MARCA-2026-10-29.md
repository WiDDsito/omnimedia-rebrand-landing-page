# Centrales telefónicas por marca

Implementación local en `solutions-section`, como siguiente capa de las vistas de telefonía.

## Alcance

- Avaya: IP Office 500 y ediciones Basic, Essential y Preferred.
- Yeastar: serie P, modelos P520, P550, P560 y P570.
- Grandstream: UCM6202, UCM6204, UCM6301, UCM6302, UCM6304, UCM6308, UCM6510 y HA100. HA100 se identifica como controlador de alta disponibilidad, no como central.

Cada marca tiene hero, introducción, aspectos de evaluación, tarjetas de modelos/ediciones, fichas PDF y enlaces a contacto, soporte, SIP y audios IVR. Se conservan las rutas originales y se actualizan las referencias de Centrales telefónicas y del menú hacia las vistas locales. Los modelos individuales se presentan dentro de cada marca; no se crean páginas independientes por modelo en esta capa.

Se reutiliza `CategoryView.astro` con un slot opcional de detalle y un destino configurable para su CTA. Las vistas existentes conservan el destino y contenido por defecto. Sin nuevas dependencias ni tienda.

## Referencias

- [Avaya](https://www.omnimediaperu.com/telefonia/centrales-telefonicas/central-telefonica-avaya/)
- [Yeastar](https://www.omnimediaperu.com/telefonia/centrales-telefonicas/centrales-telefonicas-yeastar/)
- [Grandstream](https://www.omnimediaperu.com/telefonia/centrales-telefonicas/centrales-telefonicas-grandstream/)

Se enlazan las fichas publicadas desde esas páginas (6 PDF únicos, comprobados con respuesta 200 y application/pdf). Los modelos y ediciones se resumen sin trasladar tablas de capacidades ni promesas universales de compatibilidad o disponibilidad; la configuración se remite a evaluación.

Fotografías existentes del catálogo convertidas a WebP local:

- [Avaya IP Office 500](https://www.omnimediaperu.com/wp-content/uploads/2023/10/central-telefonica-avaya-ip-office-500-omnimedia-peru.jpg) → `central-avaya-ip-office-500.webp`.
- [Grandstream UCM6301](https://www.omnimediaperu.com/wp-content/uploads/2023/11/central-telefonica-grandstream-ucm6301-omnimedia-peru.jpg) → `central-grandstream-ucm6301.webp`.
- Yeastar reutiliza `central.webp` (P560).

## Validación

- Astro check: 63 archivos sin errores, advertencias ni hints.
- 22 pruebas correctas, incluidas rutas de marca, conexión con el menú/vista padre, imágenes existentes y referencias PDF por modelo.
- Build: 23 páginas estáticas; auditoría HTML con H1 único, noindex y destinos/anclas locales válidos.
- Navegador: acceso desde la vista padre a Avaya y navegación entre marcas; imágenes cargadas; modelos 4/4/8. Comprobación a 320 y 1280 px sin desbordamientos; consola sin errores/advertencias.
- No se generaron capturas, conforme a la preferencia del usuario.
- No se modifica la web original ni se publica en GitHub/Vercel durante esta implementación local.
