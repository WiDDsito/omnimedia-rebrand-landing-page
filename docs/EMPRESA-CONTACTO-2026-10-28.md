# Conócenos, Contacto y tarjetas completas

## Implementación

- `/conocenos/`: presentación de OmniMedia Perú S.A.C., enfoque de trabajo, acceso a Soluciones, Productos y Servicios y canales de contacto. Conserva la jerarquía visual de las demás vistas e incluye una imagen WebP referencial.
- `/contactenos/`: WhatsApp, teléfono fijo, correo y celular; Facebook, Instagram, YouTube y TikTok; ubicación y coordinación de visitas. No contiene formulario. El formulario de prueba existente de cotización permanece en la portada, fuera de esta vista.
- El header, el pie, el bloque «Nuestra empresa» y «Ver canales de contacto» de la portada apuntan a las nuevas vistas locales.
- Las cuatro tarjetas de Soluciones ahora son enlaces completos. Título, fondo, descripción, etiquetas y llamada a explorar comparten un único destino. Se conserva un solo punto de foco por tarjeta, nombre accesible mediante el título y ausencia de enlaces anidados. Se mantienen el efecto flotante, el borde animado y el respeto a movimiento reducido.

## Datos y fuentes

Los canales se centralizan en `src/data/company.mjs`. Se verificaron en el HTML público de [Contacto](https://www.omnimediaperu.com/contactenos/) y [Conócenos](https://www.omnimediaperu.com/conocenos/):

- WhatsApp/celular: +51 916 945 556.
- Fijo: 01 715 2145.
- Correo: cotizaciones@omnimediaperu.com.
- Facebook: `https://www.facebook.com/OmnimediaPeru`.
- Instagram: `https://www.instagram.com/omnimedia_peru/`.
- YouTube: `https://www.youtube.com/@omnimediaperu`.
- TikTok: `https://www.tiktok.com/@omnimediaperu`.
- Ubicación publicada: Lima, Perú. El enlace a Google Maps conserva el identificador de lugar extraído del mapa incrustado original (`0x6413e72c24b63113`, equivalente a CID `7211361605130793235`).

No se inventaron calle, horario de apertura, perfiles sociales adicionales ni cifras corporativas. Los enlaces sociales abren los perfiles; no se incrustan feeds ni mapas que carguen recursos de terceros automáticamente. El correo se ajusta en móvil con un punto de salto después de `@`, sin alterar el texto al copiarlo.

## Validación

- Astro check: 56 archivos; cero errores, advertencias e hints.
- 18 pruebas aprobadas; la nueva prueba valida teléfonos, WhatsApp, correo, redes y mapa. Se comprobó que detecta un número de WhatsApp alterado.
- Build de 17 páginas. Auditoría del HTML: un H1 y `noindex, nofollow` por página, rutas y anclas locales válidas, Contacto sin formularios y cuatro tarjetas de Soluciones con un solo enlace por tarjeta.
- Navegación real desde header y menú móvil entre las nuevas vistas.
- Clics comprobados sobre descripción, icono, etiquetas y título de las cuatro tarjetas, además de Enter desde teclado y clic en etiquetas desde móvil.
- Revisión a 1280, 768 y 320 px, sin desbordamiento horizontal observado; sin errores ni advertencias de consola observados.
- Capturas en `docs/screenshots/empresa-contacto-2026-10-28/`.

Los cambios se organizan en `codex/company-contact`, con commits separados para las tarjetas y las vistas institucionales, y PR dirigido a `develop`. No se modifica la web original ni se promociona manualmente a producción.
