# Auriculares: Yealink y VT

## Alcance

Se implementan únicamente las vistas Yealink y VT, manteniendo los caminos originales:

- `/telefonia/headset-auriculares/audifonos-auriculares-yealink/`
- `/telefonia/headset-auriculares/headset-auriculares-vt/`

Ambas son accesibles desde el header y `/productos/auriculares/`. La categoría principal conserva las tres marcas. Poly y todos sus subíndices mantienen los enlaces anteriores, sin nuevas vistas ni modificaciones a su contenido.

Las nuevas vistas reutilizan la estructura informativa del proyecto: categoría roja, título principal, descripción, imagen de cabecera, criterios de selección, catálogo, enlaces grandes, asesoría y marca relacionada. Se conservan las animaciones existentes y se respeta movimiento reducido.

## Contenido

| Marca | Bloques de equipos |
| --- | ---: |
| Yealink | 9: UH34, UH36, UH37, BH70, BH71, BH74, BH76, BH76 Plus y altavoz SP96 |
| VT | 17: 15 auriculares/variantes, adaptador BT100U y altavoz CS61 |

El catálogo se organiza por tipo con accesos internos. Las tarjetas completas abren el documento disponible o los canales de contacto cuando la fuente no publica una ficha. No se crean fichas independientes por modelo en esta etapa.

Se incluyen 25 fotografías originales convertidas a WebP, con peso combinado de 355.078 bytes, y 20 documentos PDF únicos verificados. Las tarjetas cargan las fotografías de forma diferida. No se generan imágenes nuevas.

## Diferencias y referencias de la fuente

- BH76 Plus conserva su documento específico. Usa la imagen de la familia BH76, identificada como referencial mediante texto visible y alternativo.
- El enlace VT6300 biaural del original termina en `.pdfdf`. Se corrige usando la ficha válida `.pdf` de la familia VT6300.
- El bloque VTX200 se anuncia como biaural, pero el nombre y texto alternativo de su fotografía original indican monoaural. Se mantiene como imagen referencial de la familia y se indica confirmar el formato biaural.
- VTX300BT, VT9602BT, BT100U y CS61 no tienen PDF enlazado en sus bloques originales. Se ofrece consulta comercial, sin inventar documentos ni usar la ficha de otro equipo.
- Los altavoces SP96 y CS61 y el adaptador BT100U se distinguen de los auriculares.
- La información de conexión, funciones y certificaciones debe confirmarse para cada variante. No se atribuye certificación universal ni cancelación activa a toda la marca.

Las fuentes, recursos y relaciones originales por modelo se registran en `HEADSET-CATALOG-SOURCES.json`, consultados el 29 de octubre de 2026. La compilación y navegación usan datos locales.

## Verificación

- 35 pruebas aprobadas; incluye ambas marcas, conservación del árbol Poly, recursos, fichas y modelos sin documento.
- La prueba detecta la eliminación del mapa de enlaces locales, comprobada con una modificación temporal y restaurada.
- Astro: 100 archivos revisados sin errores, advertencias ni sugerencias.
- Compilación: 184 páginas estáticas. Un H1 por página, noindex y enlaces internos/anclas válidos.
- Ambas vistas comprobadas a 320, 768, 1024 y 1440 px sin desbordamientos y con jerarquía tipográfica correcta.
- Navegación desde el header, tarjetas por teclado, foco visible, imágenes y consola verificados.

Integración local en `codex/products-section` y sincronizada con el disco externo. No se publica en GitHub ni se despliega en Vercel durante esta etapa.
