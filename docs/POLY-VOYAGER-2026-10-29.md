# Poly: serie Voyager

## Alcance

Se integra exclusivamente Voyager con cinco vistas: una portada de serie y sus cuatro subíndices Focus 2, 4300 UC, Legend 50 y 5200. Blackwire, EncorePro, Savi y Sync conservan sus enlaces anteriores y no reciben vistas nuevas. Tampoco se implementa la portada general Poly en esta etapa.

La portada conserva su camino original bajo `/telefonia/headset-auriculares/headset-auriculares-plantronics-poly/`. Los modelos conservan las cuatro rutas originales en la raíz. La serie y sus subíndices son accesibles desde el menú Poly. Se añade un acceso explícito «Poly · Serie Voyager» en la portada de Auriculares, sin sustituir ni confundir el acceso general de Poly.

## Contenido

- Portada con cuatro tarjetas completas que abren la vista de cada familia.
- Cada modelo presenta características, opciones de configuración, referencias oficiales HP y canales de consulta.
- Focus 2: formato estéreo, ANC híbrida, Acoustic Fence y opciones de variante/configuración.
- 4300 UC: se distinguen 4310 monoaural y 4320 estéreo, con sus fotografías y características en la misma vista.
- Legend 50: auricular monoaural, tecnologías de voz y distinción de accesorios según referencia.
- 5200: información del formato monoaural y la configuración UC, sin prometer estuche o adaptador para cualquier paquete.
- Se preservan los componentes, jerarquía tipográfica, categoría roja, enlaces grandes, animaciones y control de regreso al inicio del proyecto.

Las siete fotografías provienen de las fuentes originales y se convierten a WebP (188.580 bytes combinados). No se generan imágenes nuevas. El contenido se compila desde datos locales.

## Precisión y referencias

El original describe Focus 2 como monoaural. La nueva vista lo identifica como estéreo/biaural, contrastado con HP. La página original de 4300 UC tiene un título SEO que menciona Blackwire; aquí se identifica correctamente como Voyager. Para 5200 se utiliza una fotografía específica de ese equipo, evitando confundirla con Blackwire por los nombres de archivos del original.

No se trasladan carruseles generales de tienda ni equipos ajenos a Voyager. No se agrega carrito, precios, stock ni compra en línea.

Las páginas originales no enlazan fichas PDF propias en sus bloques Voyager. Se incorporan referencias oficiales del fabricante, sin inventar documentos. Las páginas HP pueden estar en inglés o japonés; la información comercial de la propuesta permanece en español. La lista de fuentes y fotografías se registra en `VOYAGER-SOURCES.json`.

## Verificación

- 37 pruebas aprobadas, incluidas las cinco rutas, la jerarquía, diferencias de modelos, recursos y conservación de las demás series Poly.
- Se comprobó que la prueba detecta retirar Voyager del mapa de enlaces; la modificación temporal fue restaurada.
- Astro: 109 archivos revisados sin errores, advertencias ni sugerencias.
- Compilación correcta de 189 páginas; un H1 por página, noindex y enlaces internos/anclas válidos.
- 20 comprobaciones de las cinco vistas a 320, 768, 1024 y 1440 px sin desbordamiento y con imágenes de cabecera cargadas.
- Menú Productos → Poly → Voyager y navegación por teclado al 4300 UC verificados; ambas variantes presentes y consola sin errores.

Cambios guardados localmente en `codex/products-section` y sincronizados con el disco externo. Pendientes de publicación en GitHub.
