# Perifoneo y megafonía: vistas de familias

## Integración previa

Los cambios de telefonía y centrales por marca se subieron a `solutions-section` y se integraron a `develop` mediante el [PR #7](https://github.com/WiDDsito/omnimedia-rebrand-landing-page/pull/7), merge `64cb74a`. La comprobación de Vercel fue correcta tanto en la rama como en develop. Esta siguiente implementación de perifoneo queda local en `solutions-section` para revisión del usuario.

## Alcance de las vistas

- Consolas SIP: Fanvil X210i, A308i y A320i.
- Gateways: Fanvil PA2S y PA3; se distingue audio/video de las funciones de cada modelo.
- Altavoces: Fanvil A212, A233, FH-S01 y A201.
- Debate: controlador Vissonic VIS-DCP1000 y unidades VIS-DOC-T / VIS-DOD-T.

Cada familia reutiliza CategoryView: hero, descripción, introducción, tres aspectos de evaluación, enlaces grandes a fichas técnicas, asesoría y navegación entre familias. Se mantienen las animaciones, tipografía roja y distribución responsive existentes. Los datos originales del menú no se alteran: `solution-links.mjs` resuelve los nuevos destinos locales y conserva el comportamiento de telefonía. La vista principal de Perifoneo ahora enlaza a las cuatro páginas locales.

Las rutas coinciden con los paths originales. No se cambia hosting, dominio, redirecciones, indexación de producción ni se crea tienda. Las páginas de preview conservan noindex/nofollow. Los modelos individuales se presentan mediante fichas; no se crean once páginas adicionales en esta capa.

## Fuentes y recursos

- [Consolas](https://www.omnimediaperu.com/telefonia/equipos-de-perifoneo/telefonos-consola-sip/)
- [Gateways](https://www.omnimediaperu.com/telefonia/equipos-de-perifoneo/gateway-sip-de-audio-y-video/)
- [Altavoces](https://www.omnimediaperu.com/telefonia/equipos-de-perifoneo/altavoces-sip/)
- [Debate](https://www.omnimediaperu.com/telefonia/equipos-de-perifoneo/controlador-y-microfonos-para-debate/)

Once fichas PDF tomadas de los enlaces de esas páginas, comprobadas con respuesta 200 y application/pdf. Las fotografías públicas de X210i, PA2S, A212 y VIS-DCP1000 se convierten a WebP local (calidad 82) en `public/images/`. El texto identifica el equipo representativo y remite la compatibilidad/configuración a evaluación. Se utiliza VIS-DCP1000, como en el contenido y ficha de la fuente, aunque algunos rótulos originales escriben DPCP1000.

## Validación

- Astro check: 68 archivos, cero errores/advertencias/hints.
- 24 pruebas correctas. Incluyen navegación desde menú y vista padre, rutas originales, PDFs agrupados 3/2/4/2, recursos locales y regresión de las marcas de centrales.
- Build: 27 páginas. Auditoría de H1, noindex, enlaces y anclas locales correcta.
- Navegador: acceso desde la vista principal a Consolas y navegación entre las cuatro familias. Imágenes cargadas, fichas correspondientes y ausencia de desbordamiento a 320 y 1280 px. Consola sin errores/advertencias.
- Sin capturas generadas, conforme a la preferencia del usuario.
