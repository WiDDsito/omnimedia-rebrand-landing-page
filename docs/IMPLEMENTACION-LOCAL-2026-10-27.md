# Implementación local: header y banner comerciales

Fecha: 27 de octubre de 2026. Estado: listo para revisión local, pendiente de autorización para GitHub y posteriormente para Vercel.

## Cambios

- Header compacto con logo, Soluciones, Productos, Servicios, Conócenos, Contacto y cotización. Referencia de organización: Google Antigravity.
- Paneles amplios con introducción y familias; categorías y series expandibles. El mismo inventario alimenta ambos recorridos comerciales.
- Conservación de los destinos informativos de las 99 entradas originales que quedan al excluir la rama Tienda. Se mantiene el destino externo de Líneas SIP Trunk. El logo da acceso al inicio local.
- Tienda, carrito, checkout y pagos excluidos. Productos y marcas funcionan como catálogo informativo para cotizar.
- Satoshi 700 y 900 en encabezados, a partir de los archivos del proyecto local de Alex Urresty. IBM Plex Sans se conserva para texto y controles.
- Ocho vistas del banner, selección manual sin autoplay, anterior/siguiente, atajos de teclado y altura estable. Las vistas inactivas se excluyen de foco y accesibilidad mediante inert y aria-hidden. Sin JavaScript, las vistas se muestran como bloques.
- CTAs de demo y cotización hacia WhatsApp. Avaya J129 usa una consulta específica de cotización y disponibilidad; no promete entrega inmediata ni implementa compra.
- Se mantienen carrusel de marcas, soluciones con fondos tenues, bento, scroll bidireccional y regreso al inicio.
- A 320 px se muestra «Cotizar» en la cabecera, con nombre accesible completo, y las tarjetas de equipos usan una columna para acomodar los títulos ampliados.

## Verificación

- Astro check: cero errores, advertencias o sugerencias.
- Once pruebas automatizadas aprobadas, incluidas conservación de enlaces y recorrido circular del banner en ambas direcciones.
- Build de Astro completado.
- Comparación del HTML compilado con el inventario original: todos los destinos informativos presentes, ningún enlace de tienda/carrito/checkout, un H1 y meta robots noindex.
- Navegador real: revisados 320, 390, 768, 1024, 1280 y 1440 px. Sin desborde horizontal tras los ajustes.
- En escritorio se recorrieron las ocho campañas: escenario de 360 px y altura documental constante entre selecciones a 1280 px. A 320 px se comprobaron cinco cambios representativos, con escenario de 613,25 px y altura documental constante.
- Menú móvil: apertura, bloqueo de desplazamiento del documento, scroll del panel, Escape y retorno del foco. Series Poly: expansión y cierre de subniveles mediante Escape.
- Consola revisada: registros de desarrollo de Vite, sin errores de ejecución registrados en la sesión de verificación.
- Capturas: `docs/screenshots/local-2026-10-27/`.

## Recursos añadidos

Las siguientes imágenes proceden del sitio público de OmniMedia y se usan en la vista preliminar:

- `public/images/central.jpg`: https://www.omnimediaperu.com/wp-content/uploads/2025/05/central-telefonica-yeastar-PBX-P560-omnimedia-peru.jpg
- `public/images/hotel.jpg`: https://www.omnimediaperu.com/wp-content/uploads/2021/06/telefono-hotelero-cetis-Telematrix-3300IP-TRM-omnimedia-peru.jpg
- `public/images/avaya-j129.jpg`: https://www.omnimediaperu.com/wp-content/uploads/2020/03/telefono-avaya-J129-omnimedia-peru.jpg

La sala empresarial sigue siendo conceptual. La vista de audios usa una representación gráfica propia en HTML/CSS. No se añadieron bibliotecas ni servicios de terceros.

## Publicación pendiente

No se ejecutó push a GitHub ni despliegue a Vercel durante esta implementación. El sitio de producción no se modificó. La confirmación del usuario debe preceder a cada publicación. La preview conserva la configuración de no indexación existente; no se ha iniciado una migración SEO.

Comandos locales: `npm run dev` para desarrollo; `npm run build` y `npm run preview -- --port 4330` para revisar la compilación final. Vista local de revisión: http://127.0.0.1:4330/.
