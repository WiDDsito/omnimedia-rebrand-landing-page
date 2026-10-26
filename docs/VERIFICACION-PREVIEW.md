# Verificación de la vista preliminar

26 de octubre de 2026. Alcance: prototipo local. No es una auditoría del sitio publicado ni una certificación de conservación SEO.

## Ejecutado

- Astro check: 0 errores, 0 advertencias, 0 sugerencias en 17 archivos.
- Build estático correcto; una página y tres variantes WebP del hero, de aproximadamente 15, 35 y 69 KB.
- Tres pruebas de lógica aprobadas: campos requeridos, correo, solicitud sin teléfono y resumen sin afirmación de envío.
- Navegador real: desplegables de escritorio, una familia abierta a la vez y cierre mediante Escape.
- Navegador real: menú móvil con apertura, expansión y cierre con Escape.
- Formulario: envío vacío muestra cuatro errores y enfoca el primer campo. Datos ficticios válidos abren un resumen local con aviso explícito de que no se envió.
- Diálogo con controles de cierre y devolución de foco al botón.
- Anchos comprobados: 320, 360, 390, 768, 1024 y 1440 px. Sin desbordamiento horizontal de documento en las mediciones.
- Un único H1 y todas las anclas internas resueltas.
- Imágenes cargadas sin archivos rotos en las revisiones.
- Consola de la vista sin errores o advertencias en la sesión revisada.
- Contenido presente en HTML inicial; noindex y política que bloquea envíos nativos configurados.

## Revisión de código

Separación entre contenido, componentes y comportamiento; renderizado del resumen con textContent; ningún secreto o integración externa de captación. Fuentes locales y una sola biblioteca de animación. Contenido visible incluso cuando las animaciones se desactivan. En móvil se omiten las entradas por desplazamiento; en movimiento reducido se omiten las animaciones programadas.

## Pendiente para una web publicable

Integración con Tu Web Activa, sitemap completo, configuración de canonical/metadatos de producción, Search Console, cobertura editorial, recepción real de solicitudes, privacidad, analítica y prueba de restauración. Las imágenes de catálogo conservan por ahora el tratamiento promocional de los archivos actuales; el cliente puede sustituirlas por originales limpios.

No se han medido Core Web Vitals de campo ni conversión. No se ha realizado una prueba con lector de pantalla o una auditoría WCAG completa. Los enlaces profundos se preservan como destinos del sitio actual, sin afirmar que cada uno haya sido rastreado y validado individualmente en esta fase.
