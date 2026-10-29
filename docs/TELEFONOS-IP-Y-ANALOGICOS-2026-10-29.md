# Catálogo de teléfonos IP, SIP, digitales y analógicos

## Alcance

Rama `codex/products-section`, actualizada desde develop (`3ef1a89`) antes de implementar.

Inventario cruzado de las seis páginas de marcas y las fichas individuales del sitemap público. Incluye Samsung, presente en las fichas y en el texto de la categoría original aunque no tenga enlace de marca en el menú.

| Marca | Fichas locales |
| --- | ---: |
| Avaya | 25 |
| Fanvil | 30 |
| Poly HP | 24 |
| Yealink | 17 |
| Grandstream | 24 |
| Panasonic | 6 |
| Samsung | 2 |
| Total | 128 |

Se representan las 114 fichas originales de teléfonos empresariales inventariadas y variantes/modelos publicados en las páginas de marca. El total corresponde a fichas, no a 128 modelos de hardware únicos: algunas fuentes publican por separado condiciones o revisiones del mismo equipo. Se excluyen teléfonos hoteleros Cetis y un auricular de repuesto, pertenecientes a otras familias. Los módulos de expansión tampoco se presentan como teléfonos.

## Interfaz

- Catálogo general con búsqueda por modelo y filtros de marca, contador de resultados, estado vacío y reset.
- Siete vistas de marca y una ficha propia por equipo/variante.
- Cada ficha tiene nombre, fotografía, características, enlaces PDF cuando la fuente los publica, referencia original, asesoría y consulta de WhatsApp con el modelo preparado.
- Se mantienen las rutas originales `/producto/.../` y las rutas de marcas. Las variantes de fuentes agrupadas reciben rutas adicionales y una nota que identifica las características compartidas de la familia.
- Teléfonos IP y analógicos, la navegación por marcas y los enlaces del menú apuntan al contenido local. La categoría original `/telefonia/telefonos-analogicos-digitales-ip/` también se genera localmente.
- Contenido renderizado en servidor; los filtros se habilitan con JavaScript y todas las fichas siguen disponibles sin él.
- Se conservan paleta, tipografía y animaciones existentes. No se añade tienda, carrito, precios ni stock; las condiciones del equipo se confirman al cotizar.

## Fuentes y datos

La categoría de origen es [Teléfonos IP, SIP y analógicos](https://www.omnimediaperu.com/telefonia/telefonos-analogicos-digitales-ip/). El inventario detallado de URLs y fotografías está en `PHONE-CATALOG-SOURCES.json`.

Los datos se guardan como una instantánea estática en `src/data/phone-catalog.json`, sin peticiones externas durante el build. Se extraen características factuales resumidas; las fuentes con pocos datos no reciben prestaciones inventadas. Para Avaya 1120E Nuevo y 1408 Nuevo, las prestaciones se complementan con la otra ficha del mismo modelo y se conserva su procedencia en los datos. La referencia Panasonic KX-TG3711 incluye una nota porque la fuente escribe KX-KG3711 en su encabezado.

59 documentos PDF únicos comprobados con respuesta 200 y application/pdf. Se corrigió `hhttps://` a `https://` en el enlace publicado para GXP2130. Los enlaces de procedencia conservan la referencia de la fuente.

98 fotografías únicas convertidas a WebP local, 640 px como máximo, sin ampliar la fuente, calidad 80: 1.568.220 bytes en conjunto. Esa cifra mide los archivos de imagen, no el peso transferido de una página. Los listados usan carga diferida y las fichas priorizan la fotografía principal. No se generaron capturas ni imágenes nuevas.

Los helpers `scripts/import-phone-catalog.py` y `scripts/phone_source_parser.py` permiten normalizar una caché de HTML revisada. La caché debe contener las páginas de marca y `fetch-report.json` con las URLs de fichas descargadas. El proceso no forma parte del build; una actualización debe volver a comprobar documentos, imágenes y correcciones manuales.

## Validación

- Astro check sin errores, advertencias ni hints.
- 29 pruebas correctas: cobertura del inventario, imágenes WebP, variantes, destinos de marcas y búsqueda tolerante a acentos, espacios y guiones.
- Build: 170 páginas estáticas. Auditoría de H1 único, noindex y enlaces/anclas locales.
- Navegador: búsqueda J129, combinación sin resultados con otra marca, limpieza de filtros y búsqueda KX TS580 desde móvil. Una ficha por cada marca comprobada a 320 y 1280 px, con imagen cargada, características y sin desbordamientos.
- Se identificó que el reset debía recalcular después del restablecimiento nativo de campos; ahora se realiza en el siguiente frame.
- El panel del hero del catálogo utiliza la clase visual compartida para recibir la animación sin avisos de GSAP.

Se preservaron fuera del repositorio 49 copias locales idénticas con sufijo «2» para evitar páginas y recursos duplicados en la compilación. Los originales permanecen intactos.

No se cambia la web original, el dominio ni la indexación de producción; la propuesta mantiene noindex/nofollow.
