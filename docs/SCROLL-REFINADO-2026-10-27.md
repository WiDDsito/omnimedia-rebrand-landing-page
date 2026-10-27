# Scroll y transiciones: refinamiento local

27 de octubre de 2026. Trabajo exclusivamente local; pendiente de confirmación para GitHub y Vercel.

## Comportamiento

- Entradas más visibles: desplazamientos verticales de 48 px en bloques y 64 px en tarjetas de escritorio; 32 px en móvil. Opacidad inicial de 0,15 y curva de entrada suave.
- Posición natural y opacidad completa entre el 20 % y el 80 % de cada recorrido para una zona estable de lectura. Salida moderada y reversión continua, sin reinicios por umbral.
- Secuencia escalonada en soluciones, equipos, bento y preguntas frecuentes. Desplazamiento lateral de 24 px en algunos bloques de escritorio; sin movimiento lateral en móvil.
- Revelación de las imágenes mediante máscara, conservando el tamaño de las tarjetas y los efectos de hover existentes.
- Pie de página con final de animación limitado al desplazamiento realmente disponible: permanece completamente visible al llegar abajo. Se recorta el desborde visual de las entradas para que no altere el alto documental.
- El formulario mantiene sus campos inmóviles. La nueva animación afecta a su introducción comercial, no a los inputs.
- Cambio de perfil al pasar el breakpoint móvil sin volver a reproducir la entrada del hero. Movimiento reducido conserva el contenido sin animaciones de scroll.

## Verificación

- Doce pruebas aprobadas. Incluyen reversibilidad exacta, continuidad en los límites y estabilidad horizontal/vertical durante la lectura.
- Astro check: cero errores, advertencias y sugerencias. Compilación correcta; diferencias sin problemas de formato.
- Navegador en escritorio y móvil de 390 px, con recorridos hacia abajo y arriba.
- Muestras de escritorio: altura documental constante de 5237 px durante el recorrido; móvil: 9350 px en las muestras. Sin overflow horizontal. Mediciones guardadas en `scroll-refinement-2026-10-27.json`.
- En el final de escritorio, las cinco unidades del footer tenían opacidad 1 y transformación en posición natural. Todos los campos conservaron transform: none.
- Consola de la revisión: sin errores ni advertencias. La preferencia de movimiento reducido se respeta por configuración; no se modificó la preferencia del sistema durante esta revisión.

Revisión local: http://127.0.0.1:4330/.

No se publicaron cambios en GitHub, Vercel ni la web original. Se conservan contenido, enlaces, metadatos y restricciones de indexación.
