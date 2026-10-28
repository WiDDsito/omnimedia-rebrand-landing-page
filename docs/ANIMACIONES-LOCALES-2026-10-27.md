# Movimiento e interacciones: actualización local

27 de octubre de 2026. Pendiente de autorización para publicar en GitHub y, posteriormente, Vercel.

## Cambios

- El banner incorpora entrada direccional de la imagen, texto escalonado y aparición del pie de imagen. Anterior/siguiente respetan la dirección incluso al pasar de la primera a la última campaña.
- Los desplegables presentan introducción y familias con una secuencia breve. Las series internas y el panel móvil tienen entrada discreta.
- Las tarjetas de soluciones, equipos y servicios entran escalonadas según su posición. Se conserva la línea de tiempo de scroll persistente y reversible y su zona estable de lectura.
- Las preguntas frecuentes abren y cierran durante 280 ms, con medición de la altura real y cancelación/reversión ante clics rápidos. Al terminar se retiran las alturas temporales y se actualiza el cálculo de scroll.
- Botones, flechas y los iconos del bento responden con desplazamientos pequeños. La onda de audio realiza dos ciclos al seleccionar su vista; no queda animándose indefinidamente.
- Se utiliza CSS, la API nativa de animaciones y GSAP ya instalado. No se agregaron dependencias, autoplay al banner ni efectos que alteren la altura del header.

## Comprobaciones

- Astro check sin errores ni advertencias; 11 pruebas aprobadas; build completo y revisión de diferencias sin problemas de formato.
- Banner: altura de escenario de 360 px y altura documental constante durante los cambios comprobados en escritorio. La transición hacia atrás mostró desplazamiento negativo de entrada, incluida la vuelta a Avaya J129.
- FAQ: apertura, cierre y cambios rápidos de intención; al terminar todas las alturas temporales y estados de animación quedan eliminados.
- Móvil de 390 px: apertura de menú y entrada escalonada verificadas; sin desborde horizontal.
- Consola del navegador: sin errores ni advertencias en la sesión de revisión.
- El movimiento adicional está limitado a `prefers-reduced-motion: no-preference`; los acordeones conservan el comportamiento nativo con movimiento reducido. La nueva transición del banner se activa únicamente con JavaScript para conservar su alternativa sin scripts. No se cambió la preferencia del sistema durante la prueba.

Vista de revisión: http://127.0.0.1:4330/.

No se realizaron subidas a GitHub, despliegues en Vercel ni cambios al sitio original.
