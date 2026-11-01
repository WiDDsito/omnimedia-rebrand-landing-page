# Atención al cliente: vistas iniciales

Implementación local en `solutions-section`, sobre las vistas de telefonía y perifoneo existentes.

## Vistas y referencias originales

1. [WhatsApp multiagente](https://www.omnimediaperu.com/plataforma-multiagente-de-whatsapp/): conversaciones y llamadas compartidas, solución C3.
2. [Contact center](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/software-para-contact-center/): colas, agentes y campañas de entrada/salida.
3. [Atención automática](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/atencion-telefonica-automatica/): flujo IVR, interacción por voz y derivación.
4. [Grabación](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/plataforma-para-grabacion-de-llamadas/): registro y revisión de llamadas; integración IP o primario según evaluación.
5. [Tarificación](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/software-para-tarificacion-de-llamadas/): consumo, usuarios, claves y reportes.
6. [IVR masivos](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/plataforma-para-ivr-masivos/): campañas con audios pregrabados.
7. [SMS masivos](https://www.omnimediaperu.com/telefonia/plataformas-para-contacto-masivo/plataforma-para-sms-masivos/): mensajes, programación y reportes de entrega.

Las rutas locales conservan los mismos paths, incluida la ruta raíz de WhatsApp. El contenido se resume y adapta para orientar la evaluación, sin trasladar cifras de velocidad/efectividad, compatibilidad universal ni promesas comerciales del material original.

## Estructura e integración

Se reutiliza CategoryView sin modificar su estructura: breadcrumb, hero con nombre rojo e icono, H1, descripción, introducción, tres aspectos destacados, enlaces grandes, conversación y tres soluciones relacionadas. CustomerCareVisual presenta un esquema conceptual de tres pasos distinto para cada solución; no representa un panel funcional ni datos reales.

CustomerCarePage concentra la composición común. Una página raíz sirve WhatsApp y una ruta dinámica genera las seis vistas restantes. `solution-links.mjs` resuelve los siete enlaces originales hacia páginas locales tanto en el menú como en Atención al cliente. Los datos originales del menú permanecen intactos.

Cada vista ofrece acceso a Contacto, Audios e IVR y dos soluciones relacionadas mediante enlaces grandes. Se mantienen animaciones, controles de navegación y diseño responsive existentes. No se agregan dependencias, formularios, envíos, grabaciones ni integraciones reales de campañas. No se modifica producción; noindex/nofollow se mantiene en la vista previa.

## Verificación

- Astro check: 73 archivos sin errores, advertencias ni hints.
- 26 pruebas correctas, con cobertura de las siete rutas, conexión desde menú/vista principal, relaciones y esquemas completos.
- Build: 34 páginas estáticas. Auditoría de H1 único, noindex y enlaces/anclas locales correcta.
- Navegador: clic desde Atención al cliente a WhatsApp; recorrido de las siete vistas en 320 y 1280 px. H1 único, esquema con tres pasos, tres relaciones y sin desbordamientos en todas; consola sin errores/advertencias.
- No se generaron capturas ni nuevos recursos gráficos de imagen.
- Cambios locales pendientes de revisión antes de publicarlos.
