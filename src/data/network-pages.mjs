import equipment from './network-equipment.json' with { type: 'json' };

/** @type {Record<string, {id: string, title: string, group: string, description: string, features: string[], image: string, pdf: string, note?: string}[]>} */
const equipmentByFamily = equipment;
export const networkCatalogPath = '/productos/networking/';
const pages = [
  {
    id: 'switches',
    title: 'Switches de red',
    path: '/productos/switches-de-red/',
    headline: 'El punto de encuentro de tu red.',
    description:
      'Conecta puestos de trabajo, telefonía y equipos de tu empresa desde una infraestructura común.',
    image: 'switch.webp',
    imageAlt: 'Switch de red referencial del portafolio de OmniMedia Perú',
    imageNote: 'Imagen referencial de un switch de red.',
    introTitle: 'Organiza tus conexiones desde la base.',
    introduction: [
      'Un switch conecta dispositivos dentro de una red local. El portafolio original presenta equipos HP/HPE Aruba y Ubiquiti UniFi, y también menciona alternativas Grandstream.',
      'Explora las dos familias del menú y comparte los puestos, dispositivos y conexiones que necesita tu instalación. Para otras alternativas del portafolio, consulta al equipo comercial.',
    ],
    points: [
      ['Puertos', 'Cuenta los equipos actuales y considera futuras conexiones.'],
      ['Alimentación', 'Revisa si tus dispositivos necesitan PoE y qué presupuesto requieren.'],
      ['Gestión', 'Define cómo administrarás el tráfico y los segmentos de red.'],
    ],
  },
  {
    id: 'switch-aruba',
    parentId: 'switches',
    title: 'Switches HP / HPE Aruba',
    path: '/productos/switches-de-red/switch-hp-aruba-officeconnect/',
    headline: 'Una red preparada para tu operación.',
    description: 'Explora Instant On 1830 y las familias CX 6000, CX 6100 y CX 6200.',
    image: 'network/switch-aruba-5.webp',
    imageAlt: 'Switch HPE Aruba CX 6100 de 24 puertos',
    imageNote: 'CX 6100 de 24 puertos. Funciones según versión.',
    introTitle: 'Compara la familia y la configuración.',
    introduction: [
      'Esta categoría conserva la ruta HP Aruba / OfficeConnect del sitio original. El catálogo actual muestra Instant On 1830 y las series CX 6000, CX 6100 y CX 6200.',
      'Los puertos, enlaces y opciones de alimentación dependen de la referencia exacta. Consulta el documento de cada familia antes de definir el equipo.',
    ],
    points: [
      ['Capacidad', 'Compara la cantidad de puertos de cada alternativa.'],
      ['Referencia', 'Confirma el código de producto y las opciones del modelo.'],
      ['Integración', 'Evalúa los enlaces y la administración de tu red.'],
    ],
  },
  {
    id: 'switch-unifi',
    parentId: 'switches',
    title: 'Switches Ubiquiti UniFi',
    path: '/productos/switches-de-red/switch-ubiquiti-unifi/',
    headline: 'Más conexiones. Una gestión compartida.',
    description: 'Conoce las familias Flex, Lite, Pro y Pro XG del portafolio UniFi.',
    image: 'network/switch-unifi-8.webp',
    imageAlt: 'Switch Ubiquiti UniFi USW Pro 24',
    imageNote: 'USW Pro 24. Imagen del catálogo original.',
    introTitle: 'Elige el switch para tu instalación.',
    introduction: [
      'El catálogo UniFi reúne equipos compactos y alternativas para instalaciones con más conexiones.',
      'Compara formatos y documentación. Revisa la red existente antes de seleccionar una referencia.',
    ],
    points: [
      ['Formato', 'Evalúa la ubicación del equipo.'],
      ['Conexiones', 'Dimensiona puertos, enlaces y alimentación.'],
      ['Administración', 'Revisa la integración con UniFi.'],
    ],
  },
  {
    id: 'ups',
    title: 'UPS · Respaldo eléctrico',
    path: '/productos/ups-unidad-de-alimentacion-ininterrumpida/',
    headline: 'Dale respaldo a lo que te conecta.',
    description: 'Explora los equipos APC y dimensiona el respaldo eléctrico de tu instalación.',
    image: 'network/ups-apc-7.webp',
    imageAlt: 'UPS APC SRT5KXLI del catálogo de OmniMedia Perú',
    imageNote: 'APC SRT5KXLI. Autonomía según carga y configuración.',
    introTitle: 'Empieza por los equipos que necesitas proteger.',
    introduction: [
      'Una UPS aporta respaldo temporal ante una interrupción eléctrica. El catálogo APC reúne equipos de las familias BV/BVX, BR, SRT, SRV y SMT.',
      'La autonomía se calcula con la carga conectada y la configuración de baterías. Revisa potencia, tomas, tensión y montaje en la ficha del modelo antes de cotizar.',
    ],
    points: [
      ['Carga conectada', 'Identifica los equipos y su consumo para dimensionar el respaldo.'],
      ['Tiempo necesario', 'Define cuánto tiempo debe continuar la operación.'],
      ['Instalación', 'Revisa espacio, conexiones eléctricas y condiciones del ambiente.'],
    ],
  },
  {
    id: 'access-points',
    title: 'Access point · Puntos de acceso',
    path: '/productos/access-point/',
    headline: 'Tu red, donde trabaja tu equipo.',
    description:
      'Puntos de acceso HP/HPE Aruba y Ubiquiti UniFi para evaluar la cobertura de tu empresa.',
    image: 'network/ap-aruba-1.webp',
    imageAlt: 'Punto de acceso HPE Aruba AP-515',
    imageNote: 'AP-515. Equipo referencial de acceso inalámbrico.',
    introTitle: 'Cada espacio necesita una cobertura pensada.',
    introduction: [
      'Un punto de acceso permite conectar dispositivos inalámbricos a la red. La elección depende del ambiente, los usuarios y la forma en que se utilizará la conexión.',
      'Explora las familias HP/HPE Aruba y Ubiquiti UniFi. Comparte la distribución del espacio para orientar la evaluación de cobertura e instalación.',
    ],
    points: [
      ['Ambientes', 'Identifica interiores, exteriores y obstáculos del espacio.'],
      ['Usuarios', 'Considera cuántos dispositivos usarán la red simultáneamente.'],
      ['Instalación', 'Evalúa ubicación, cableado y alimentación de cada punto.'],
    ],
  },
  {
    id: 'ap-aruba',
    parentId: 'access-points',
    title: 'Access point HP / HPE Aruba',
    path: '/productos/access-point/access-point-hp-aruba/',
    headline: 'Cobertura que acompaña tu espacio.',
    description: 'Conoce AP-515, AP-535, AP-635 y las alternativas Instant On AP11D y AP27.',
    image: 'network/ap-aruba-3.webp',
    imageAlt: 'Punto de acceso HPE Aruba AP-635',
    imageNote: 'AP-635. Imagen del catálogo original.',
    introTitle: 'Compara el entorno y la familia de acceso.',
    introduction: [
      'La selección Aruba incluye equipos para distintos ambientes y generaciones Wi-Fi.',
      'Compara ubicación y necesidades de conexión. Confirma las condiciones de administración e instalación de cada modelo.',
    ],
    points: [
      ['Ambiente', 'Distingue equipos para interiores y exteriores.'],
      ['Capacidad', 'Evalúa los dispositivos que compartirán la conexión.'],
      ['Administración', 'Confirma la plataforma y los requisitos del proyecto.'],
    ],
  },
  {
    id: 'ap-unifi',
    parentId: 'access-points',
    title: 'Access point Ubiquiti UniFi',
    path: '/productos/access-point/access-point-ubiquiti-unifi/',
    headline: 'Conecta cada ambiente con criterio.',
    description:
      'Explora puntos de acceso UniFi y otros dispositivos de esta familia del portafolio.',
    image: 'network/ap-unifi-5.webp',
    imageAlt: 'Punto de acceso Ubiquiti UniFi U7 Pro',
    imageNote: 'U7 Pro. Configuración según proyecto.',
    introTitle: 'Identifica primero el tipo de equipo.',
    introduction: [
      'Esta vista reúne los dispositivos publicados en la categoría original.',
      'Los puntos de acceso, enlaces inalámbricos y dispositivos de control de acceso se presentan por separado para facilitar la elección.',
    ],
    points: [
      ['Uso', 'Distingue cobertura Wi-Fi, interconexión y acceso físico.'],
      ['Ubicación', 'Elige el formato según el espacio.'],
      ['Integración', 'Valida la plataforma correspondiente.'],
    ],
  },
];

export const networkPages = pages.map((page) => ({
  ...page,
  icon: 'globe',
  source: `https://www.omnimediaperu.com${page.path}`,
  equipment: equipmentByFamily[page.id] ?? [],
  linksTitle: ['switches', 'access-points'].includes(page.id)
    ? 'Explora los equipos por marca.'
    : 'Completa tu infraestructura.',
  links: [
    ...pages
      .filter((item) =>
        ['switches', 'access-points'].includes(page.id)
          ? item.parentId === page.id
          : (item.parentId === page.parentId && item.id !== page.id) ||
            (!item.parentId && item.id !== page.parentId && item.id !== page.id),
      )
      .map((item) => ({
        title: item.title,
        description: item.description,
        href: item.path,
        actionLabel: 'Explorar la categoría',
      })),
    {
      title: 'Asesoría para tu red',
      description: 'Comparte los equipos y ambientes que necesitas conectar.',
      href: '/contactenos/',
      actionLabel: 'Ver canales de contacto',
    },
  ],
}));
const paths = new Map(networkPages.map((page) => [page.source, page.path]));
export const localNetworkHref = (href) => paths.get(href) ?? href;
