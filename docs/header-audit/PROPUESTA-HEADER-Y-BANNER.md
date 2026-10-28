# OmniMedia Perú: adaptación del header, menú y banner

Fecha de revisión: 27 de octubre de 2026. Estado: propuesta para implementar por capas.

Actualización de alcance: por instrucción del cliente, se excluye la tienda virtual y se centraliza la navegación tomando como referencia el header de Google Antigravity. Esta actualización sustituye las recomendaciones anteriores de conservar Tienda, carrito y tres franjas de cabecera.

## Alcance y criterio de conservación

La nueva necesidad del cliente cambia el alcance del primer prototipo: la portada comercial debe dar acceso al contenido informativo y comercial del menú original, excluyendo la tienda virtual, y representar las vistas comerciales de su banner. La navegación resumida «Soluciones / Equipos / Servicios / Nosotros» no representa por sí sola las 103 entradas actuales.

Se propone conservar las categorías comerciales, marcas, series, modelos y destinos informativos, reorganizados dentro de una navegación centralizada. Las nueve opciones del sitio original son evidencia del estado actual, no una estructura obligatoria para el nuevo header. Tienda y sus tres accesos quedan fuera de la nueva propuesta. La landing funciona como portada comercial y puerta de entrada al catálogo informativo existente, orientada a asesoría y cotización. No implica construir 103 páginas nuevas ni reemplazarlas por secciones de una sola página.

**No se desarrollará una tienda virtual:** quedan fuera carrito, checkout, pagos, cuentas de comprador, pedidos y botones de añadir al carrito. Tampoco se incorporarán accesos a la tienda existente en el header nuevo. Las fichas de producto se mantienen como destinos informativos; su presentación futura deberá responder al mismo enfoque de cotización. Esta decisión no autoriza borrar páginas de producción ni redirigirlas.

En este documento, «header» significa franja de contacto, identidad, navegación y utilidades; «banner» significa el hero comercial inmediatamente inferior. Las dos interpretaciones del pedido quedan cubiertas. Se revisó el sitio público, su HTML, el menú móvil y la presentación de escritorio. No se hizo un rastreo HTTP de cada destino ni se accedió a Search Console, ventas o administración de WordPress.

Archivos de evidencia:

- [Árbol exacto de etiquetas y enlaces](INVENTARIO-MENU.md).
- [Datos estructurados del menú](menu-original.json).
- [Textos, imágenes y acciones del banner original](banner-original.json).

## 1. Qué existe hoy

La cabecera de escritorio tiene una franja roja con teléfono fijo, celular y redes; debajo aparecen logo, menú, búsqueda y carrito. A 1280 px, «Contáctenos» cae en una segunda línea. En móvil se muestran la franja de teléfono, hamburguesa, logo, búsqueda y carrito, y el menú se expande verticalmente con subniveles.

| Opción original | Entradas, incluida la principal | Profundidad máxima, incluida la principal | Contenido observado en el original |
|---|---:|---:|---|
| Inicio | 1 | 1 | Acceso a la portada |
| Conócenos | 1 | 1 | Página de empresa |
| Videoconferencia | 12 | 4 | Yealink, barras, sistemas y MeetingBoard |
| Perifoneo y megafonía | 5 | 2 | Consolas, gateway, altavoces y debate |
| Telefonía | 52 | 5 | Centrales, teléfonos, hotelería, auriculares y contacto masivo |
| Productos | 24 | 5 | Poly, switches, UPS, access points y remanufacturados |
| Servicios | 3 | 2 | Soporte y audios para centrales |
| Tienda | 4 | 2 | Compra directa, por categoría y por marca |
| Contáctenos | 1 | 1 | Página de contacto |
| Total | 103 | 5 | Nueve opciones principales y 94 entradas descendientes |

Las 103 entradas son enlaces del árbol de navegación, no 103 productos ni 103 páginas distintas. «Videoconferencia» y «Tienda» usan `#` como destino de apertura. «Líneas SIP Trunk» lleva a otro dominio: `https://www.lineassiptrunk.com/`.

Hay una separación comercial poco evidente: Yealink está en «Videoconferencia», mientras Poly aparece dentro de «Productos». También se mezclan soluciones, equipos y aplicaciones dentro de «Telefonía». La nueva organización reunirá el acceso por solución y por equipo en paneles comprensibles, manteniendo las URL informativas y evitando duplicar listados equivalentes. La sección siguiente define la arquitectura revisada.

## 2. Composición propuesta de la cabecera: referencia Antigravity

Referencia principal del header: https://antigravity.google/, revisada el 27 de octubre de 2026 en escritorio, tanto cerrada como con Products desplegado. La referencia tipográfica de Alex Urresty se mantiene exclusivamente para la presencia de títulos; Antigravity guía la organización e interacción del header.

Se observaron una barra clara y compacta, logo a la izquierda, navegación agrupada en el centro y acciones destacadas a la derecha. El panel Products se extiende bajo la barra, con una introducción a la izquierda y enlaces agrupados en el área restante. El disparador abierto tiene fondo suave y cambia la orientación de su indicador. Estos son los patrones a adaptar; el comportamiento móvil y de teclado de la referencia no se ha auditado.

| Patrón de Antigravity | Adaptación a OmniMedia |
|---|---|
| Barra principal compacta | Una fila con logo, navegación y CTA; sustituye la propuesta anterior de tres franjas |
| Pocas opciones principales | Soluciones, Productos, Servicios, Conócenos y Contacto |
| Panel desplegable amplio | Introducción breve a la izquierda y familias comerciales a la derecha |
| Categorías con explicación | Descripciones de una línea que ayuden a elegir, sin bloques de publicidad |
| Estado abierto perceptible | Fondo gris suave, indicador y foco visibles; rojo de OmniMedia como acento |
| Acción destacada a la derecha | «Solicitar cotización» con el color de marca |

### Arquitectura centralizada propuesta

- Logo: acceso a Inicio, sin repetir un enlace Inicio en la barra.
- Soluciones: Telefonía empresarial; Videoconferencia; Perifoneo y megafonía; Atención al cliente y contacto masivo. Conserva sus categorías y destinos informativos. Videoconferencia ofrece acceso conjunto a Yealink y Poly, sin cambiar las URL actuales. Contacto masivo se presenta aquí y deja de duplicarse como otro bloque completo en Telefonía.
- Productos: Teléfonos IP y analógicos; Auriculares; Telefonía hotelera; Equipos de videoconferencia; Networking (switches, access points y UPS); Accesorios y remanufacturados. Agrupación por tipo de equipo y marcas, orientada a consulta y cotización.
- Servicios: Soporte técnico y Audios/IVR, con acceso a la página de servicios existente.
- Conócenos: página de empresa existente.
- Contacto: página de contacto existente.
- Solicitar cotización: acción principal persistente. Puede dirigir al formulario comercial o WhatsApp; se definirá el destino funcional al implementar.

El recorrido por solución y el recorrido por equipo responden a necesidades distintas. Los dos apuntan a una única fuente de contenido, sin duplicar fichas ni crear URL para cada recorrido. Los títulos de categoría pueden cambiar para mejorar la comprensión; la matriz de conservación registra su correspondencia con el sitio original.

### Composición y comportamiento

Altura inicial propuesta: 80–88 px en escritorio y 64–72 px en móvil, pendientes de validar con el logo y los textos reales. El header permanece con altura constante durante el scroll. El contacto telefónico puede aparecer dentro del panel Contacto y en el pie; no necesita una franja adicional obligatoria. Las redes se concentran en el pie y la información de contacto.

Los paneles se alinean al contenedor de la página y se superponen al banner sin empujarlo. Se propone una transición discreta de opacidad y desplazamiento de 8–12 px durante 180–240 ms. Fondo blanco, texto negro/gris, divisores suaves y rojo reservado para CTA y estados. No se reproduce el hero, las partículas, las acciones de descarga ni la identidad de Google.

En móvil: logo, botón Menú y acceso de cotización si cabe con comodidad. El panel reúne las mismas cinco opciones, con categorías expandibles, cierre visible y desplazamiento propio. Si la fila de escritorio deja de caber, se cambia al menú compacto antes de provocar un salto de línea. Mantener posición del documento y foco al abrir/cerrar.

La búsqueda del catálogo es opcional y solo se incluirá si tiene un destino funcional y aporta claridad. No se mostrarán carrito, cuenta, pagos ni acceso Tienda. El inventario original permanece intacto como evidencia histórica.

## 3. Adaptación de cada familia original dentro de la nueva navegación

Las familias descritas a continuación se distribuyen dentro de Soluciones y Productos; sus encabezados no representan nueve opciones nuevas en la barra. Los menús se presentan como paneles amplios bajo la navegación. Se evitan cascadas laterales de cinco niveles. Las familias tienen un enlace propio y un control independiente para expandir sus modelos: abrir no debe navegar, y navegar no debe depender de hover.

### Videoconferencia

Panel de Yealink con tres grupos:

- Barras: MeetingBar A10, A25, A40 y A30.
- Sistemas: MVC860, MVCS60 y MVC S90.
- Pantalla interactiva: MeetingBoard Pro.

Se conservan los enlaces de «Barras y sistemas de videoconferencia Yealink» y de sus dos categorías intermedias. El panel Videoconferencia integra accesos a Yealink y Poly; Productos permite encontrarlos por tipo de equipo, usando los mismos destinos. No se cambia el destino del nombre Videoconferencia a una página inventada.

### Perifoneo y megafonía

Panel compacto, sin profundidad adicional: teléfonos consola SIP, gateway SIP de audio y video, altavoces SIP, controlador y micrófonos para debate. Se mantiene el enlace de la categoría principal y se puede acompañar con una imagen tenue de equipos. El contenido no depende de esa imagen.

### Telefonía

Es el panel más extenso y debe diseñarse primero como caso de mayor exigencia. Sus grupos serán:

| Grupo | Contenido conservado | Presentación propuesta |
|---|---|---|
| Centrales y conectividad | Central virtual; Líneas SIP Trunk; centrales Avaya, Yeastar y Grandstream | Columna con categorías y enlaces por marca |
| Teléfonos analógicos, SIP e IP | Avaya, Fanvil, Poly, Yealink, Grandstream y Panasonic | Columna por tipo y marca |
| Telefonía hotelera | Cetis: Telematrix, Teledex y Scitec; Fanvil | Bloque propio, sin ocultarlo bajo teléfonos de oficina |
| Headset y auriculares | Poly, Yealink y VT | Familias visibles; series Poly expandibles |
| Contacto masivo | WhatsApp multiagente, atención automática, grabación, tarificación, contact center, IVR y SMS | Bloque propio en Soluciones; conserva enlaces y evita duplicarlo dentro de Telefonía |

Auriculares Poly conserva Voyager (Focus 2, 4300 UC, Legend 50, 5200), Blackwire (3200, 3300, 5200, 8225), EncorePro (300, 500, 700), Savi (7200 Office, 7300 Office, 7300 UC, 7400 Office) y altavoces Poly Sync. Los dos modelos «5200» se muestran con contexto de serie para evitar confundir sus destinos.

Las familias pueden organizarse en columnas; dentro de cada una se expanden las series y modelos. Si el contenido supera el espacio disponible, el panel tiene scroll interno y límites ligados al alto del viewport. Se evitará un tercer panel lateral que exija mover el cursor con precisión. Todos los enlaces se entregan en el HTML inicial de Astro.

### Productos

Conservar el contenido existente y reunirlo por tipo de equipo dentro de Productos, con un panel de columnas:

- Videoconferencia Poly HP: sistema/cámara Poly Studio con G62, E60 y E70; familia Poly Studio con USB, R30, V12, V52, V72, X32, X52 y X72.
- Switches: HP Aruba–OfficeConnect y Ubiquiti UniFi.
- Access points: HP Aruba y Ubiquiti UniFi.
- UPS y accesorios/equipos remanufacturados como accesos independientes.

Los enlaces de las categorías intermedias también permanecen. El nuevo diseño puede decir «Videoconferencia Poly HP» con más claridad, conservando el nombre completo en el inventario y sin modificar las URL.

### Servicios, exclusión de Tienda y páginas corporativas

Servicios conserva Soporte técnico y Audios para centrales telefónicas. Su enlace principal abre la página de servicios actual; no se sustituye por el bento de cuatro pasos, porque ese bento explica el proceso de trabajo y no equivale al catálogo de servicios.

Tienda, Compra web directa, Por categoría y Por marca se excluyen de la navegación propuesta. La información de equipos y marcas se centraliza en Productos, Soluciones y sus destinos informativos. No se implementan compras, carrito ni pagos. Las cuatro entradas originales de Tienda se conservan únicamente en el inventario histórico; no son criterios de cobertura funcional de la nueva landing.

Inicio se conserva mediante el logo. Conócenos y Contacto mantienen los destinos corporativos de Conócenos y Contáctenos. Las secciones de presentación y contacto de la landing pueden seguir existiendo, pero no deben eliminar el acceso a esas páginas.

## 4. Adaptación de las ocho vistas del banner

El HTML contiene ocho vistas comerciales con texto y CTA, y un noveno nodo vacío. El nodo vacío no se interpreta como una campaña adicional. En el banner actual, todas las acciones son enlaces a WhatsApp; Avaya J129 utiliza un enlace corto distinto.

Se propone conservar las ocho vistas en un selector manual con anterior/siguiente, indicador de posición y acceso visible a todos los temas. Inicialmente sin autoplay. En escritorio: texto a la izquierda, producto o composición de equipos a la derecha sobre gris tenue. En móvil: texto primero e imagen debajo, con controles grandes. El selector debe admitir varias filas en móvil y no recortar las opciones.

| Vista | Contenido original que se conserva | Adaptación visual y editorial propuesta | Acción |
|---|---|---|---|
| Central virtual | Central telefónica virtual, telefonía IP en la nube, integración de comunicaciones | «Central telefónica virtual en la nube», equipo o esquema de conexión sobrio | Solicitar demo |
| Centrales IP | Venta, instalación y configuración; Avaya, Grandstream y Yeastar en la imagen | Título legible y tres marcas/equipos con espacio suficiente | Cotizar |
| Teléfonos IP | Venta, instalación y configuración | «Teléfonos IP para tu empresa», equipos recortados, marcas en texto secundario | Cotizar |
| Audios para centrales | Saludos, publicidad, IVR y horarios de atención | «Audios e IVR para tu central telefónica», representación discreta de audio | Solicitar demo |
| Videoconferencia | Venta e instalación de cámaras | «Cámaras y barras de videoconferencia», producto o sala de reuniones | Cotizar |
| Auriculares | Auriculares, headsets y audífonos | «Auriculares profesionales», una imagen dominante y usos secundarios | Cotizar |
| Telefonía hotelera | Teléfonos hoteleros; Cetis y Fanvil en la imagen | «Teléfonos para hoteles», equipos en contexto de recepción o habitación | Cotizar |
| Avaya J129 | Producto, «Entrega inmediata», Comprar, como registro del original | Promoción informativa del modelo con fotografía clara; disponibilidad pendiente de validar | Solicitar cotización del Avaya J129; confirmar destino de WhatsApp antes de reutilizarlo |

Los cambios de redacción son propuestas, no reemplazos ya aplicados. La matriz JSON conserva la transcripción y el enlace exactos de cada vista. Se puede añadir un enlace secundario «Ver equipos» hacia la categoría correspondiente. Se conservan las acciones de demo y cotización; «Comprar» en Avaya J129 se sustituye por «Solicitar cotización» para respetar la exclusión de la tienda virtual. Ninguna afirmación de stock se reutiliza como dato vigente sin confirmación del cliente.

Mantener un H1 estable para la portada, por ejemplo «Soluciones en telefonía IP y telecomunicaciones». Cada vista usa un título H2. El encabezado fijo puede estar integrado en la introducción del banner; la maqueta debe comprobar que no compita con el título de la campaña. El contenido de cada panel existe en el HTML, aunque solo uno esté visible. Si no hay JavaScript, las vistas se ofrecen como bloques o lista navegable.

Para evitar saltos: espacio reservado para el título más largo, área visual con proporción definida, dimensiones de imagen explícitas y transición por opacidad con movimiento de 8–12 px. El contenedor no recalcula su altura al cambiar de vista. Usar aproximadamente 220–320 ms; con movimiento reducido, cambio inmediato o disolución breve. No animar el tamaño de fuente ni la altura de la cabecera.

## 5. Tipografía: tomar la presencia de Alex Urresty

Se revisó https://alexurresty.com/. En la captura de escritorio, el H1 usa Satoshi, peso 900 y unos 89 px; los H2 llegan a 76 px. La presencia visual viene del peso, la escala y el espacio que recibe el título. Es una referencia de jerarquía, no una escala que deba copiarse literalmente en un catálogo empresarial.

En el prototipo de OmniMedia, `global.css` usa IBM Plex Sans; H1 y H2 tienen peso 500, con máximos declarados de 68 y 44 px. Existen reglas de breakpoint que también deben revisarse al implementar la nueva escala.

Propuesta inicial: mantener IBM Plex Sans para cuerpo, botones, formularios y navegación; usar Satoshi para títulos, con archivos autorizados y alojados localmente. Si esos archivos no están disponibles, probar primero IBM Plex Sans 700 antes de añadir una dependencia. No simular pesos 800/900 si la fuente elegida no los incluye.

| Rol | Escritorio | Móvil | Peso y criterio |
|---|---|---|---|
| H1 de portada | 72–88 px, ajustable según la composición | 40–48 px | 800–900 en Satoshi; máximo tres líneas en móvil |
| Título de vista del banner | 40–56 px | 28–34 px | 700–800; subordinado al H1 fijo |
| H2 de secciones | 48–64 px | 32–40 px | 700–800 |
| H3 de bloques | 26–32 px | 23–28 px | 700 |
| Encabezados dentro del megamenú | 18–22 px | 18–20 px | 700; no usar la escala del hero |
| Navegación y enlaces | 15–16 px | 16–18 px | 500–600, sin fuente condensada |
| Párrafos | Conservar 16–18 px | Conservar 16–18 px | 400; interlineado cómodo |

Los rangos son valores de diseño propuestos, pendientes de comprobar con los textos reales. Títulos negros sobre el fondo claro; rojo para acciones y estado activo. Mantener la paleta negro/blanco/rojo/gris. No convertir todo el texto en negrita ni reutilizar el fondo audiovisual de Alex.

## 6. Interacción, accesibilidad y estabilidad

- Apertura mediante botón con estado expandido y relación explícita con su panel; enlace separado cuando la categoría tiene una página propia.
- Tab recorre controles y enlaces en orden; Escape cierra y devuelve el foco al disparador. Clic fuera cierra sin navegar accidentalmente. Solo un menú principal abierto a la vez.
- No usar roles de menú de aplicación para una navegación común de sitio. Usar `nav`, listas, enlaces y botones o disclosures nativos.
- En móvil, acordeones de familias y series con sangría limitada; no cinco niveles de texto cada vez más pequeños. Conservar botones para volver al nivel anterior si se elige navegación por vistas.
- Panel con alto máximo disponible y desplazamiento interno. No debe tapar sus propios controles o quedar bajo el banner.
- Cerrar el menú no modifica la altura reservada al header ni desplaza el documento. Mantener las mejoras de scroll bidireccional y movimiento reducido existentes.
- Búsqueda, si se incluye, cotizar y contacto requieren estados de foco visibles y nombres comprensibles. No crear controles decorativos sin acción. Carrito y controles transaccionales quedan excluidos.

## 7. Conservación SEO y continuidad comercial

Cambiar el estilo no permite garantizar posiciones idénticas. Esta fase se limita a la vista preliminar; no altera el sitio original. Una futura puesta en producción debe tener comparación antes/después y medición de Search Console.

1. Mantener los destinos informativos y su correspondencia al reorganizar el menú. Los `#` originales representan aperturas, no páginas de categoría. La rama Tienda se excluye por alcance; esta decisión no implica borrar sus páginas o redirigirlas en producción.
2. Entregar enlaces `<a href>` y texto descriptivo en HTML generado por Astro. No cargar los enlaces únicamente después de hover, clic o una llamada de red. Google documenta que los enlaces rastreables dependen de esa estructura.
3. Conservar categorías, marcas, series y modelos; no enviar todas las categorías a `#soluciones` ni todos los productos a WhatsApp.
4. Preservar el destino externo de Líneas SIP Trunk. No convertirlo accidentalmente en una ruta interna.
5. Distinguir enlaces del catálogo y acciones de WhatsApp. La conversión se añade al acceso informativo, no lo sustituye.
6. Mantener rutas, metadatos y canonicals de las páginas existentes durante la fase visual. Cualquier futura modificación requiere inventario y mapeo específicos; no está autorizada por este análisis.
7. Conservar los temas y términos comerciales del banner en texto HTML. Las imágenes originales tienen `alt` vacío en el slider; no trasladar todo su mensaje a una imagen de fondo.
8. Mantener la preview protegida y con `noindex`. El `robots.txt` que bloquea el rastreo no sustituye por sí solo a `noindex`; la configuración definitiva del entorno de revisión debe comprobarse por separado.
9. Antes de lanzar, obtener línea base de consultas, páginas de entrada, clics orgánicos y contactos. No atribuir el posicionamiento exclusivamente al proveedor de alojamiento: esta revisión no demuestra esa relación.
10. La tienda virtual queda excluida del proyecto. No mezclar el rediseño con cambios de dominio o migración del catálogo. La publicación comercial y la retirada de `noindex` requieren un plan independiente.

Fuentes técnicas: [enlaces rastreables, Google Search Central](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) y [cambios de sitio por etapas](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). La segunda guía se aplicaría a una migración futura; no implica que este trabajo necesite cambiar URL.

## 8. Orden de implementación por capas

| Capa | Entrega concreta | Verificación para continuar |
|---|---|---|
| 0. Inventario | Árbol histórico de 103 entradas, exclusión de las cuatro de Tienda y ocho vistas del banner | Matriz de correspondencia entre contenido informativo original y nueva navegación |
| 1. Títulos | Fuente/pesos y escala responsive aplicados solo a encabezados | Lectura en móvil y escritorio; títulos largos sin recortes; cuerpo conservado |
| 2. Header cerrado | Barra compacta inspirada en Antigravity: logo, cinco opciones y cotización | Sin segunda línea accidental, sin overflow, sin carrito ni Tienda, altura estable |
| 3. Menús | Panel Soluciones con Telefonía como caso más denso; después Productos y Servicios | Cobertura de las 99 entradas informativas de origen tras excluir Tienda; registrar agrupaciones y accesos equivalentes, sin exigir 99 enlaces repetidos |
| 4. Banner | Primero central virtual con el nuevo estilo; después las siete vistas restantes | Matriz completa, CTAs correctos y cambio de vista sin saltos |
| 5. Móvil y teclado | Panel compacto, acordeones, foco y cierre | Mismas categorías y destinos; recorrido completo sin ratón |
| 6. Continuidad | Comparación de enlaces, capturas y revisión del prototipo | Sin pérdida de contenido, enlaces rotos introducidos o cambios de indexación |

Primera entrega visual recomendada: títulos + header compacto inspirado en Antigravity + panel Soluciones con Telefonía + vista Central virtual. Permite evaluar la mayor densidad de catálogo y el hero con contenido real antes de propagar el diseño. El inventario completo evita que las siguientes capas se conviertan en una selección arbitraria.

## 9. Estructura prevista en Astro

Una fuente de datos de navegación con etiqueta, URL, hijos, identificador estable, tipo de destino y correspondencia con la categoría original. La centralización agrupa contenido desde esa fuente y no genera copias de fichas o páginas. La primera versión parte del inventario, sin inferir rutas a partir del nombre. Un archivo separado describe las ocho vistas del banner, imagen, título, descripción, CTA y estado de disponibilidad pendiente de validar.

Componentes previstos: evolución de `Header.astro` como barra compacta, `MegaMenu.astro`, `MobileNavigation.astro` y `CommercialBanner.astro`. `UtilityBar.astro` deja de ser un componente requerido, al descartarse la cabecera de tres franjas. No se prevén componentes de tienda, carrito ni checkout. Revisar `src/data/content.ts`, `src/components/Hero.astro`, `src/styles/global.css` y el controlador de navegación existente al implementar; este documento no los modifica.

Astro entrega contenido y enlaces estáticos. JavaScript gestiona la apertura, foco y selección de vista. CSS resuelve estados y transiciones; GSAP solo se reutiliza si aporta una transición que CSS no resuelva con claridad. No hace falta añadir Three.js o Anime.js para el header.

## 10. Límites y puntos de validación

- Confirmar vigencia de Avaya J129, «Entrega inmediata», su enlace corto y las imágenes comerciales antes de mostrar esa promoción como actual. El CTA será de cotización, sin compra dentro de la landing.
- Referencia visual del header: [Google Antigravity](https://antigravity.google/). Las observaciones de escritorio sustentan la composición propuesta; los requisitos de móvil y accesibilidad son decisiones para OmniMedia, pendientes de verificación al implementar.
- Validar las redes y las condiciones de uso de recursos tipográficos y de producto antes de su entrega comercial.
- El inventario no demuestra tráfico ni rentabilidad de cada opción. Esa prioridad se ajustará con el cliente y Search Console.
- Este trabajo entrega análisis y planificación. No cambia el código visual, no publica una nueva versión y no modifica WordPress ni el dominio de producción.
