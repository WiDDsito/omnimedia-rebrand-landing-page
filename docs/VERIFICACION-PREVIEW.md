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

Separación entre contenido, componentes y comportamiento; renderizado del resumen con textContent; ningún secreto o integración externa de captación. Fuentes locales y una sola biblioteca de animación. Contenido visible incluso cuando las animaciones se desactivan. En móvil se reducen los desplazamientos de las entradas; en movimiento reducido se omiten las animaciones programadas.

## Pendiente para una web publicable

Integración con Tu Web Activa, sitemap completo, configuración de canonical/metadatos de producción, Search Console, cobertura editorial, recepción real de solicitudes, privacidad, analítica y prueba de restauración. Las imágenes de catálogo conservan por ahora el tratamiento promocional de los archivos actuales; el cliente puede sustituirlas por originales limpios.

No se han medido Core Web Vitals de campo ni conversión. No se ha realizado una prueba con lector de pantalla o una auditoría WCAG completa. Los enlaces profundos se preservan como destinos del sitio actual, sin afirmar que cada uno haya sido rastreado y validado individualmente en esta fase.


## Actualización de movimiento y bento

- Carrusel: desplazamiento continuo de 28 s por ciclo, duplicado visual oculto a tecnologías de asistencia. Comprobado el cambio de transformación entre lecturas, estado `running`, pausa manual y reanudación. Se pausa también con hover/foco y fuera de pantalla.
- Soluciones: cuatro fondos cargados. Comprobados foco del enlace, z-index 3 de tarjeta y contenedor, y animación del borde. Elevación de 8 px con puntero preciso y 7 px con foco; borde con un recorrido de 850 ms, sin bucle persistente.
- Servicios: bento de cuatro pasos en dos filas desiguales en escritorio; una columna en móvil, manteniendo el orden 01 a 04 y el bloque izquierdo original.
- Scroll: IntersectionObserver activa GSAP una vez por bloque en todas las secciones. Los contenedores de entrada son independientes de la transformación de selección de las tarjetas.
- Revisión responsive repetida a 320, 360, 390, 768, 1024 y 1440 px: anchura del documento igual a la ventana. Imágenes de fondo cargadas y sin errores/advertencias en consola.
- Astro check y build aprobados; pruebas de formulario existentes aprobadas. No se añadieron dependencias.
- La preferencia de movimiento reducido se atiende en CSS y GSAP; no se cambió la configuración del sistema del usuario para simularla. Sin JavaScript, el carrusel presenta una lista estática y el contenido sigue visible.
- Nuevas capturas: `soluciones-motion.png`, `servicios-bento.png` y `mobile-motion.png`. Las anteriores se mantienen como referencia de la primera versión.


## Transiciones reforzadas y regreso al inicio

- Entradas de secciones con 54 px de recorrido en escritorio y 28 px en móvil, opacidad inicial 0,15, escala inicial 0,975 y secuencia escalonada de 0,1 s. Duración 0,95 s. El contenido solo se anima cuando entra en pantalla.
- Hero: apertura mediante recorte, zoom suave de la imagen y aparición escalonada del texto y la tarjeta de conexión.
- Botón fijo: 56 px en escritorio, 52 px en móvil y separación de 18 px en móvil con respeto al área segura. Aparece después de 320 px; muestra progreso y funciona sin JavaScript como ancla.
- Navegador: comprobados aparición al desplazarse, posición fija, progreso y regreso a scrollY 0. Tras activar en móvil, foco en hero-title y hash #inicio; el botón se oculta al llegar arriba. Sin errores o advertencias de consola.
- Seis pruebas de lógica aprobadas: las tres de formulario y tres del estado de desplazamiento/progreso, incluidos sobrepaso del límite y páginas cortas. Astro check y build aprobados.
- Sin nuevas dependencias. La configuración de movimiento reducido omite las entradas y el desplazamiento suave. No se modificó la preferencia del sistema durante las pruebas.
- Capturas: return-to-top-desktop.png y return-to-top-mobile.png.


## Corrección vigente: scroll bidireccional sin reinicios

Esta corrección sustituye las entradas de una sola ejecución descritas en las versiones anteriores.

**Causa identificada:** el observador lanzaba gsap.from al cruzar un umbral, cambiando inmediatamente el estado visual de contenido que ya comenzaba a verse. Después dejaba de observarlo. La escala y la limpieza posterior de transformaciones acentuaban el cambio.

**Solución:** timelines persistentes controlados por ScrollTrigger y scrub de 0,25 s. Entrada y salida reversibles con zona central de lectura completamente visible y sin desplazamiento. Se eliminan la escala, los reinicios y clearProps del movimiento de scroll; se conservan las interacciones de selección independientes. No se utilizan pin, snap ni sustitución del desplazamiento nativo. El formulario permanece fijo en su layout.

**Estabilidad:** fuentes locales precargadas; posiciones recalculadas cuando terminan de cargar las fuentes o cambia una pregunta frecuente. Las pequeñas variaciones de altura de la barra del navegador móvil no provocan refrescos de ScrollTrigger.

**Pruebas automáticas:** nueve pruebas aprobadas. Las nuevas comprueban igualdad del estado al recorrer la timeline en ambos sentidos, zona de lectura a tamaño natural y continuidad en los límites de entrada/salida. Astro check: 0 errores, 0 advertencias. Build aprobado. ScrollTrigger forma parte de la dependencia GSAP ya instalada; no se agregaron paquetes.

**Navegador, escritorio:** scrollY 450 → 900 → 1350 → 900 → 450. Se recuperó exactamente la transformación y opacidad originales en 900 y 450. La altura del documento permaneció en 5096 px; los offsets de layout de la cabecera de Soluciones y su primera tarjeta permanecieron en 1085 y 1271 px. Evidencia: scroll-trace-desktop.json.

**Navegador, móvil de 390 px:** scrollY 1067 → 1489 → 1067 con el mismo estado inicial/final. Altura del documento constante de 8340 px y sin desbordamiento horizontal. El formulario conserva transform none. Evidencia: scroll-trace-mobile.json. El botón de regreso continúa llegando a scrollY 0 y devuelve el foco a hero-title. Consola sin errores o advertencias.

Estas mediciones comprueban estabilidad en el recorrido probado; no constituyen una medición completa de CLS o rendimiento de todos los dispositivos.

Fuentes técnicas: [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) y [configuración de refrescos móviles](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.config()/).
