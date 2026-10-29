const origin = 'https://www.omnimediaperu.com';
const parent = '/telefonia/centrales-telefonicas/';
export const pbxBrandPaths = {
  avaya: parent + 'central-telefonica-avaya/',
  yeastar: parent + 'centrales-telefonicas-yeastar/',
  grandstream: parent + 'centrales-telefonicas-grandstream/',
};
const avayaSheet =
  origin + '/wp-content/uploads/2020/01/HOJA-DE-DATOS-AVAYA-IP-OFFICE-500-OMNIMEDIA-PERU.pdf';
const yeastarSheet =
  origin +
  '/wp-content/uploads/2025/05/hoja-de-datos-centrales-telefonicas-yeastar-pbx-p520-p550-p560-p570-omnimedia-peru.pdf';
const grandstream6200Sheet =
  origin +
  '/wp-content/uploads/2020/02/central-telefonica-grandstream-serie-6200-omnimedia-peru.pdf';
const grandstream6300Sheet =
  origin +
  '/wp-content/uploads/2021/10/HOJA-DE-DATOS-CENTRAL-TELEFONICA-GRANDSTREAM-SERIE-UCM6300-OMNIMEDIA-PERU.pdf';
const links = [
  {
    title: 'Asesoría para tu central',
    description: 'Cuéntanos cuántos usuarios y sedes necesitas conectar.',
    href: '/contactenos/',
  },
  {
    title: 'Soporte técnico',
    description: 'Consulta instalación, configuración y mantenimiento.',
    href: '/servicios/soporte-tecnico/',
  },
  {
    title: 'Líneas SIP Trunk',
    description: 'Evalúa la conectividad de llamadas de tu empresa.',
    href: '/telefonia/lineas-sip-trunk/',
  },
  {
    title: 'Audios y menús IVR',
    description: 'Organiza la primera atención de tus llamadas.',
    href: '/servicios/audios-e-ivr/',
  },
];
export const pbxBrandPages = [
  {
    id: 'avaya',
    slug: 'central-telefonica-avaya',
    path: pbxBrandPaths.avaya,
    source: origin + pbxBrandPaths.avaya,
    title: 'Centrales Avaya',
    headline: 'Tu telefonía, con Avaya IP Office.',
    description:
      'Conoce la central IP Office 500 y las opciones de configuración, licenciamiento y mantenimiento para tu empresa.',
    icon: 'phone',
    image: 'central-avaya-ip-office-500.webp',
    imageAlt: 'Central telefónica Avaya IP Office 500 del catálogo de OmniMedia Perú',
    imageNote: 'Avaya IP Office 500. Configuración según tu proyecto.',
    introTitle: 'Empieza por la operación que necesitas conectar.',
    introduction: [
      'IP Office reúne la atención telefónica y las comunicaciones de tu equipo. La solución se dimensiona según los usuarios, las sedes y los equipos que deseas integrar.',
      'Revisa la edición y las licencias de tu instalación antes de ampliar o actualizar. OmniMedia acompaña la venta, programación y mantenimiento de estas centrales.',
    ],
    points: [
      ['Atención organizada', 'Evalúa buzón de voz, transferencias y operadora automática.'],
      ['Licencias y crecimiento', 'Selecciona las capacidades según la edición de IP Office.'],
      ['Tu instalación actual', 'Comparte versiones y equipos para evaluar la integración.'],
    ],
    modelsTitle: 'IP Office y sus ediciones.',
    modelsDescription:
      'Revisa la plataforma y conversa con nuestro equipo sobre la edición adecuada.',
    models: [
      {
        name: 'IP Office 500',
        label: 'Plataforma',
        description: 'Central telefónica para la comunicación de tu empresa.',
        href: avayaSheet,
      },
      {
        name: 'Basic Edition',
        label: 'Edición',
        description: 'Telefonía y mensajería para la operación diaria.',
        href: avayaSheet,
      },
      {
        name: 'Essential Edition',
        label: 'Edición',
        description: 'Opciones de telefonía IP y movilidad.',
        href: avayaSheet,
      },
      {
        name: 'Preferred Edition',
        label: 'Edición',
        description: 'Capacidades adicionales de colaboración y atención.',
        href: avayaSheet,
      },
    ],
    linksTitle: 'Prepara tu proyecto Avaya.',
    links,
  },
  {
    id: 'yeastar',
    slug: 'centrales-telefonicas-yeastar',
    path: pbxBrandPaths.yeastar,
    source: origin + pbxBrandPaths.yeastar,
    title: 'Centrales Yeastar',
    headline: 'Una plataforma para conversar y colaborar.',
    description:
      'Explora las centrales Yeastar de la serie P y encuentra una configuración acorde a tu equipo y a tu forma de atender.',
    icon: 'phone',
    image: 'central.webp',
    imageAlt: 'Central telefónica Yeastar P560 del catálogo de OmniMedia Perú',
    imageNote: 'Yeastar P560. Imagen referencial de la serie P.',
    introTitle: 'Elige la capacidad que necesita tu empresa.',
    introduction: [
      'La serie P de Yeastar integra telefonía y opciones de colaboración. Sus distintos modelos permiten evaluar una plataforma según el tamaño y las necesidades de tu operación.',
      'La cantidad de usuarios, las llamadas simultáneas, los módulos y las licencias deben definirse juntos. Consulta las características de cada equipo antes de seleccionar tu configuración.',
    ],
    points: [
      ['Serie P', 'Compara las alternativas P520, P550, P560 y P570.'],
      ['Colaboración', 'Evalúa las funciones y clientes Linkus según tu plan.'],
      ['Implementación', 'Revisa módulos, conectividad y acompañamiento técnico.'],
    ],
    modelsTitle: 'Conoce la serie P de Yeastar.',
    modelsDescription: 'Consulta la ficha de la familia y solicita una evaluación de capacidad.',
    models: ['P520', 'P550', 'P560', 'P570'].map((name) => ({
      name,
      label: 'Serie P',
      description: 'Consulta capacidad, interfaces y opciones de ampliación.',
      href: yeastarSheet,
    })),
    linksTitle: 'Diseña tu solución Yeastar.',
    links,
  },
  {
    id: 'grandstream',
    slug: 'centrales-telefonicas-grandstream',
    path: pbxBrandPaths.grandstream,
    source: origin + pbxBrandPaths.grandstream,
    title: 'Centrales Grandstream',
    headline: 'Conecta tu operación con Grandstream.',
    description:
      'Conoce las centrales UCM y las alternativas de integración para la telefonía IP de tu empresa.',
    icon: 'phone',
    image: 'central-grandstream-ucm6301.webp',
    imageAlt: 'Central telefónica Grandstream UCM6301 del catálogo de OmniMedia Perú',
    imageNote: 'Grandstream UCM6301. Equipo referencial de la familia UCM.',
    introTitle: 'Una central elegida para tu infraestructura.',
    introduction: [
      'Las centrales Grandstream de la familia UCM permiten organizar comunicaciones sobre IP. El catálogo reúne alternativas para diferentes necesidades de usuarios, llamadas e interfaces.',
      'Para una nueva instalación o una ampliación, comparte tu central actual, terminales y conectividad. Así podrás revisar compatibilidad y requisitos antes de elegir el equipo.',
    ],
    points: [
      ['Familias UCM', 'Explora las series UCM6200, UCM6300 y UCM6510.'],
      ['Conexiones', 'Revisa interfaces SIP, analógicas y digitales según el modelo.'],
      ['Continuidad', 'Consulta la solución HA100 para instalaciones UCM6510.'],
    ],
    modelsTitle: 'Explora equipos y continuidad.',
    modelsDescription:
      'Modelos publicados en el catálogo original. Consulta disponibilidad y configuración con nuestro equipo.',
    models: [
      ...['UCM6202', 'UCM6204'].map((name) => ({
        name,
        label: 'Serie UCM6200',
        description: 'Central IP de la familia UCM6200.',
        href: grandstream6200Sheet,
      })),
      ...['UCM6301', 'UCM6302', 'UCM6304', 'UCM6308'].map((name) => ({
        name,
        label: 'Serie UCM6300',
        description: 'Alternativa de central para comunicaciones empresariales.',
        href: grandstream6300Sheet,
      })),
      {
        name: 'UCM6510',
        label: 'Central IP',
        description: 'Opción con conectividad digital E1/T1/J1.',
        href:
          origin +
          '/wp-content/uploads/2020/02/CENTRAL-TELEFONICA-GRANDSTREAM-UCM6510-OMNIMEDIA-PERU.pdf',
      },
      {
        name: 'HA100',
        label: 'Alta disponibilidad',
        description: 'Controlador para una solución con dos centrales UCM6510.',
        href:
          origin + '/wp-content/uploads/2020/02/CONTOLADOR-GRANDSTREAM-HA100-OMNIMEDIA-PERU.pdf',
      },
    ],
    linksTitle: 'Evalúa tu instalación Grandstream.',
    links,
  },
];
