# Banner comercial: siete categorías

Cambios preparados en `codex/webp-images`, sobre la versión vigente de main. Flujo de publicación autorizado: rama de trabajo → develop → main.

## Alcance

- Siete diapositivas: Central virtual, Centrales IP, Teléfonos IP, Audios e IVR, Videoconferencia, Auriculares y Telefonía hotelera.
- Avaya J129 se retira únicamente de las campañas; su ficha de catálogo se conserva.
- Se utilizan las seis imágenes WebP proporcionadas por el cliente en `public/images/banners/`. Central virtual utiliza banner-omnimedia; Audios e IVR conserva su representación de voz.
- Referencia de interacción: https://bestsol.pe/ — banner panorámico con desplazamiento manual. Se adapta a la identidad de OmniMedia con contenido y recursos propios.
- Las siete categorías enlazan a las vistas locales existentes. Los enlaces comerciales a WhatsApp se conservan.

## Comportamiento

- Avance automático circular cada 5 segundos y transición horizontal suave.
- Botones anterior/siguiente, selección directa, teclado, arrastre con mouse sobre la imagen y gesto táctil horizontal.
- Pausa explícita, suspensión al pasar el mouse, enfocar contenido, arrastrar, ocultar la pestaña o salir de pantalla. Cada motivo de suspensión se gestiona por separado.
- Con preferencia de movimiento reducido no hay reproducción automática inicial ni transición. El usuario puede activar la reproducción explícitamente.
- La altura se comparte entre las siete diapositivas para evitar saltos; en móvil la imagen aparece encima del contenido.
- Solo la diapositiva activa admite foco. Sin JavaScript, las siete se muestran en secuencia.

## Verificación

38 pruebas aprobadas, revisión Astro sin errores, advertencias ni observaciones. Compilación de 189 páginas. Se verificaron los siete destinos, las seis imágenes y los tamaños de 320, 768, 1024 y 1440 px sin desbordamiento. Navegación circular con teclado y arrastre con mouse comprobados en navegador; consola sin errores.

## Archivos locales duplicados

Antes de compilar se encontraron copias no versionadas con sufijos 2 y 3, incluyendo rutas dinámicas inválidas. Se resguardaron, sin eliminarlas, en `../omnimedia-local-backups/duplicados-2026-11-01*`.

## Imágenes de las tarjetas de Soluciones

Se incorporan telefonia.webp, conferencia.webp, call-center.webp y perifonia.webp, proporcionadas por el cliente. La imagen tiene 75% de transparencia en reposo (opacidad 0.25) y 25% de transparencia al pasar el cursor, enfocar por teclado o presionar (opacidad 0.75). El texto conserva un fondo claro para asegurar su lectura. No se alteran los enlaces ni las vistas de destino.

Las cuatro tarjetas encuadran la fotografía central mediante un recorte CSS proporcional por imagen, ocultando las franjas blancas superiores e inferiores de los originales sin deformación ni modificación de los archivos fuente.

## Equipos y movimiento de la página

La primera tarjeta de equipos utiliza omnimedia-telefonos-tarjeta.webp, proporcionada por el cliente. El cambio se limita a la tarjeta del inicio. Se añade desplazamiento leve del contenedor de las imágenes, entrada gradual de encabezados y una línea de progreso por etapa en Servicios. En escritorios de altura suficiente, la introducción de Servicios permanece visible mediante posicionamiento sticky mientras se recorre su bento. No se intercepta el scroll; los efectos son reversibles y respetan movimiento reducido. No se ejecutan tests por indicación del cliente.

## Variación de entradas por sección

Soluciones alterna entradas laterales; Equipos combina apertura simétrica, círculo y cortinas laterales en las imágenes; Servicios alterna diagonales cortas con escala del 98% al 100%; Nosotros presenta columnas desde lados opuestos; preguntas y pie alternan desplazamientos laterales cortos. Los textos alcanzan su posición natural antes de la zona de lectura. Se mantienen reversibilidad, movimiento reducido y desplazamiento nativo. No se ejecutan nuevos tests para los últimos ajustes visuales, siguiendo la indicación del cliente.
