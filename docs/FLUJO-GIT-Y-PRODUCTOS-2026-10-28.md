# Flujo de ramas y primera capa de Productos

## Ramas

- `main`: versión estable. No recibe directamente los avances de una sección.
- `develop`: integración de cambios revisados y verificados. El nombre real del remoto está en minúsculas.
- `solutions-section`: cambios de Soluciones; integrados mediante el [PR #1](https://github.com/WiDDsito/omnimedia-rebrand-landing-page/pull/1).
- `codex/products-section`: rama creada desde el `develop` actualizado para las vistas iniciales de Productos.

Para cada siguiente sección: actualizar `develop` con fast-forward, crear una rama de trabajo, realizar commits de alcance concreto, ejecutar comprobaciones y revisar la interfaz, publicar la rama, abrir un PR hacia `develop`, comprobar CI y fusionar el SHA revisado. No forzar pushes ni integrar directamente en `main`.

El repositorio está conectado con Vercel y los pushes disparan comprobaciones/previews automáticamente. Esto se distingue de una promoción manual a producción. En el primer PR se corrigió `.vercelignore`: `/assets` excluye únicamente la carpeta de recursos de la raíz y conserva `src/assets`, necesaria para compilar el hero. La comprobación de Vercel aprobó el commit corregido antes de fusionar Soluciones.

## Productos implementados

La portada `/productos/` reúne las seis familias del menú. Cada vista inicial incluye identificación en rojo con tamaño menor al H1, introducción, imagen referencial, aspectos para orientar la elección, enlaces grandes, asesoría y acceso a otras familias.

| Familia | Ruta |
| --- | --- |
| Teléfonos IP y analógicos | `/productos/telefonos-ip-y-analogicos/` |
| Auriculares | `/productos/auriculares/` |
| Telefonía hotelera | `/productos/telefonia-hotelera/` |
| Equipos de videoconferencia | `/productos/equipos-de-videoconferencia/` |
| Networking | `/productos/networking/` |
| Accesorios y remanufacturados | `/productos/accesorios-y-remanufacturados/` |

El menú conserva su orientación y subniveles originales. Sus títulos de familia llevan a las nuevas vistas, y «Ver categoría completa» conserva el destino original. Las tarjetas de equipos de la portada y el enlace del pie llevan a las vistas locales. Las marcas, series y modelos todavía apuntan a las páginas informativas originales; su adaptación queda para la siguiente capa.

Productos y Soluciones comparten `CategoryView.astro` para conservar tipografía, espaciados y animaciones sin duplicar la plantilla. Se comparó el HTML de contenido de las cuatro páginas de Soluciones antes y después de la extracción: permanece idéntico.

No hay carrito, checkout, precios ni disponibilidad asumida. Remanufacturados muestra información básica y canales de consulta, sin inventar un inventario. Las imágenes son referenciales y los modelos, compatibilidad y condiciones requieren evaluación comercial. Todas las páginas mantienen `noindex, nofollow`; la web original no se modifica.

## Fuentes de contenido

- [Productos](https://www.omnimediaperu.com/productos/)
- [Teléfonos](https://www.omnimediaperu.com/telefonia/telefonos-analogicos-digitales-ip/)
- [Auriculares](https://www.omnimediaperu.com/telefonia/headset-auriculares/)
- [Telefonía hotelera](https://www.omnimediaperu.com/telefonia/telefonos-hoteleros/)
- [Videoconferencia](https://www.omnimediaperu.com/productos/equipos-y-camaras-de-videoconferencia-poly-yealink-logitech/)
- [Accesorios y remanufacturados](https://www.omnimediaperu.com/productos/accesorios-equipos-remanufacturados/)

## Validación

- Astro check: 46 archivos; cero errores, advertencias y hints.
- 14 pruebas aprobadas. La prueba nueva valida cobertura de las seis familias, rutas únicas, enlaces originales e imágenes existentes. Se comprobó que falla si Remanufacturados pierde sus enlaces.
- Build: doce páginas estáticas (portada, cuatro soluciones, portada de Productos y seis familias).
- Auditoría del HTML generado: enlaces locales y anclas válidos, un H1 por página y `noindex, nofollow`.
- Navegador: seis vistas accesibles, enlaces entre familias, breadcrumb hacia Productos, menú móvil y regreso al catálogo. Sin errores ni advertencias observados en consola.
- Revisión a 1280, 768 y 320 px; sin desbordamiento horizontal observado. Capturas en `docs/screenshots/productos-2026-10-28/`.
