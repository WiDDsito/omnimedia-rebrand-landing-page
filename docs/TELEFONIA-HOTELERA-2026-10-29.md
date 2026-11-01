# Telefonía hotelera: vistas de los subíndices

## Alcance

Se implementan las cinco vistas del menú de productos: Cetis, Fanvil y las familias Cetis Telematrix, Teledex y Scitec. Se reutiliza la estructura de las vistas informativas existentes, con categoría en rojo, título principal, introducción, criterios de selección, enlaces grandes, asesoría y familias relacionadas.

La portada de telefonía hotelera mantiene su ruta `/productos/telefonia-hotelera/`. Los cinco subíndices conservan los caminos del sitio original bajo `/telefonia/telefonos-hoteleros/`. El menú y la portada dirigen a las vistas locales. Las familias Cetis muestran el nivel intermedio en la ruta de navegación.

## Contenido integrado

| Vista | Series o equipos |
| --- | --- |
| Cetis | Accesos a Telematrix, Teledex y Scitec |
| Fanvil | H5, H2U |
| Telematrix | 9600, 3300, 3100, Trimline |
| Teledex | Opal, Diamond/Diamante, Nugget, D, I, E, M |
| Scitec | Aegis 08, Emergency |

Son 15 bloques informativos con características breves y acceso a documentación, dentro de las cinco vistas. No se generan fichas individuales para cada variante de hardware en esta integración. Las tarjetas completas abren el PDF correspondiente y admiten navegación por teclado.

Se incorporan 14 fotografías convertidas a WebP. Emergency usa un icono y su nombre, ya que la fuente no proporciona una fotografía individual. La imagen general Scitec se utiliza en su cabecera. No se generan imágenes nuevas.

La sección Trimline del original repite el PDF de la serie 3100. Se enlaza la ficha 3300, donde aparecen las variantes 3300TRM y 3300IP-TRM, y se explica el alcance del documento en la tarjeta. Las prestaciones se presentan por familia y se deben confirmar por versión.

## Referencias

Las cinco fuentes, fotografías y documentos originales están registrados en `HOTEL-CATALOG-SOURCES.json`, consultados el 29 de octubre de 2026. El contenido se prepara antes de compilar; no depende de consultas al sitio original en tiempo de ejecución.

## Verificación

- 31 pruebas aprobadas; incluye cobertura de todos los subíndices, la jerarquía Cetis y el mapa de enlaces locales.
- La prueba de rutas detecta la eliminación del mapeo hotelero, comprobada con una modificación temporal y restaurada.
- Astro: 87 archivos revisados, sin errores, advertencias ni sugerencias.
- Compilación: 175 páginas estáticas; un H1 por página, noindex y enlaces internos/anclas válidos.
- 14 documentos PDF únicos comprobados: respuesta 200 y cabecera PDF válida.
- Las cinco vistas se revisaron a 320, 768, 1024 y 1440 px sin desbordamiento horizontal.
- Comprobados los accesos del menú, la navegación Cetis → Telematrix, carga de imágenes, tarjetas enfocables y ausencia de errores en consola.

El alcance es la propuesta local. No se modifica el sitio original ni se incorpora tienda, carrito o pago.
