# Iconos de redes sociales

Facebook, Instagram, YouTube y TikTok usan los trazados SVG de [Simple Icons](https://github.com/simple-icons/simple-icons/tree/90646e4bf7f3b89df6c37e65baf3e7bc759a517c/icons), revisión `90646e4bf7f3b89df6c37e65baf3e7bc759a517c`. Licencia del repositorio: [CC0 1.0 Universal](https://github.com/simple-icons/simple-icons/blob/90646e4bf7f3b89df6c37e65baf3e7bc759a517c/LICENSE.md).

Los trazados se conservan en `src/components/SocialIcon.astro` y se renderizan como SVG inline de 24 × 24 px, con `currentColor` para respetar el rojo de OmniMedia. No se agregan dependencias, scripts ni peticiones a un CDN. Son decorativos (`aria-hidden` y `focusable="false"`): cada tarjeta mantiene su nombre de red visible y su etiqueta accesible, además del aviso de apertura en otra pestaña. Los enlaces de contacto se conservan.
