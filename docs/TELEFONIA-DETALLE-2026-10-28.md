# Telefonía: vistas de detalle

Rama de trabajo: `solutions-section`, actualizada mediante fast-forward desde `origin/main` (`642a63d`) antes de implementar. Revisión local, sin modificar el sitio original.

## Vistas

1. `/telefonia/central-telefonica-virtual/`: introducción, movilidad, administración, implementación y enlaces a demostración/contacto, SIP, IVR y teléfonos.
2. `/telefonia/lineas-sip-trunk/`: diferencia entre anexos y canales, evaluación de compatibilidad, capacidad y enlaces de integración. Conserva acceso al sitio SIP de referencia.
3. `/telefonia/centrales-telefonicas/`: central IP, dimensionamiento, servicios y enlaces originales de Avaya, Yeastar y Grandstream. Las vistas individuales de marcas siguen pendientes de una siguiente capa.

Las rutas de Central virtual y Centrales conservan los paths publicados. SIP tiene una ruta local nueva. Esto facilita una futura migración; no supone garantizar resultados SEO. La vista previa conserva noindex/nofollow y no se cambian dominios, hosting, redirecciones ni la web original.

## Integración

`telephony-pages.mjs` reúne contenido, referencias y resolución de enlaces. `NavigationTree.astro` utiliza las vistas locales para los tres destinos, conservando los datos originales del menú y sus subenlaces. Telefonía empresarial y el enlace de equipos apuntan a las nuevas vistas. El banner ya usaba los dos paths originales, que ahora se generan localmente.

Se reutiliza `CategoryView.astro`, con un slot visual opcional cuyo fallback conserva las imágenes de las vistas existentes. Virtual y SIP muestran esquemas conceptuales accesibles; Centrales reutiliza `central.webp`. Se mantienen tipografía, color rojo, animaciones existentes y enlaces de cotización. No se agregan dependencias, formularios ni tienda.

## Fuentes consultadas

- [Central telefónica virtual](https://www.omnimediaperu.com/telefonia/central-telefonica-virtual/)
- [Líneas SIP Trunk](https://www.lineassiptrunk.com/)
- [Centrales telefónicas](https://www.omnimediaperu.com/telefonia/centrales-telefonicas/)

Contenido resumido y adaptado a la propuesta. Las condiciones y compatibilidad se remiten a evaluación comercial/técnica; no se trasladan promesas de ahorro, capacidades ilimitadas o garantías generales del material original.

## Validación

- Astro check: 60 archivos, sin errores, warnings ni hints.
- 20 pruebas correctas, incluidas rutas, conexiones desde la vista general, resolución del menú y conservación de marcas/fuentes.
- Build: 20 páginas estáticas. Auditoría del HTML: H1 único, noindex y todos los enlaces/anclas locales válidos.
- Navegador: acceso desde Soluciones a SIP y al submenú de Centrales; tres marcas presentes. Imagen de central cargada. Diagramas virtual/SIP renderizados. Sin mensajes de error o advertencia en consola.
- Revisión de escritorio a 1280 px y las tres vistas a 320 px: sin desbordamientos horizontales.
- Evidencias: `docs/screenshots/telefonia-2026-10-28/`.
