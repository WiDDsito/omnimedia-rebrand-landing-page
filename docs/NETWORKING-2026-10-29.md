# Networking: vistas iniciales de productos

## Alcance

Se implementan las siete vistas de los subíndices del menú de Networking y se conectan desde la portada `/productos/networking/`, el header y las categorías relacionadas. Se conservan los caminos originales de cada subíndice.

| Vista | Equipos con documentación |
| --- | ---: |
| Switches de red | Accesos a las dos marcas del menú |
| Switches HP / HPE Aruba | 8 |
| Switches Ubiquiti UniFi | 9 |
| UPS APC | 21 |
| Access point | Accesos a las dos marcas del menú |
| Access point HP / HPE Aruba | 5 |
| Access point Ubiquiti UniFi | 12 |

Las cinco vistas con catálogo incluyen 55 bloques de equipos, con fotografía, descripción breve, criterios o características y acceso a su ficha técnica. Las tarjetas completas son enlaces accesibles por teclado. Esta etapa implementa vistas por subíndice, sin páginas individuales nuevas por modelo.

Se mantienen la estructura de las vistas informativas, el nombre de categoría rojo en tamaño inferior al H1, las transiciones del proyecto, el efecto de selección de tarjetas y las animaciones al desplazarse. La preferencia de movimiento reducido se respeta. Los catálogos se organizan por familias con enlaces internos para recorrerlos sin añadir JavaScript.

## Recursos y precisión del contenido

- 55 fotografías originales convertidas a WebP, con un peso combinado de 700.020 bytes; carga diferida en las tarjetas.
- 51 PDF únicos de las fuentes originales verificados por respuesta HTTP y cabecera del archivo.
- El índice original de switches menciona Grandstream; se conserva esa referencia informativa y el canal de consulta, sin inventar un subíndice que no está en el menú.
- La ruta OfficeConnect se conserva; su vista identifica las familias Instant On 1830 y CX que actualmente muestra el catálogo original.
- En UniFi se distinguen puntos de acceso, el enlace UDB Pro Sector y el dispositivo de control de acceso UA-Pocket. Los puntos de acceso aparecen primero.
- No se trasladan cifras de potencia o autonomía UPS desde encabezados inconsistentes. La selección remite a la ficha y al cálculo según la carga.
- El original anuncia SRV3KI-E y enlaza una ficha SRV3KI. La tarjeta muestra una nota visible y asociada para tecnologías de asistencia, indicando que se debe confirmar la referencia al cotizar.
- Las fichas SRT1500XLI y SRT2200XLI conservan sus URLs originales con una K adicional en el nombre de archivo; el contenido PDF confirma los modelos sin esa K.

La URL original `/productos/` identifica una página general. No se remapea globalmente a Networking. Solo el acceso específico del header dirige a `/productos/networking/`.

Las siete fuentes y recursos quedan documentados en `NETWORK-CATALOG-SOURCES.json`, consultados el 29 de octubre de 2026. El sitio compila con datos locales; no necesita extraer información de producción durante la compilación ni al navegar.

## Verificación

- 33 pruebas aprobadas: cobertura de todos los subíndices, jerarquías, recursos WebP, documentos y enlaces locales.
- La prueba de rutas detecta la eliminación del mapeo de Networking, comprobada temporalmente y restaurada.
- Astro: 96 archivos revisados sin errores, advertencias ni sugerencias.
- Compilación de 182 páginas estáticas; enlaces locales y anclas válidos, un H1 por página y noindex conservado.
- 28 comprobaciones de las siete vistas a 320, 768, 1024 y 1440 px: sin desbordamientos, imágenes de cabecera cargadas y jerarquía tipográfica correcta.
- Accesos del header verificados; navegación al catálogo Aruba y tarjetas mediante teclado con foco visible; sin errores ni advertencias en consola.

Cambios limitados a la propuesta local y su copia de trabajo en el disco externo. No se modifica la web original ni se añade carrito o pago.
