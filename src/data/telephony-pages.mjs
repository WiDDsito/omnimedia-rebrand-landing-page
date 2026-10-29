import { pbxBrandPages, pbxBrandPaths } from './pbx-brand-pages.mjs';
const origin = 'https://www.omnimediaperu.com';
export const telephonyPaths = {
  virtual: '/telefonia/central-telefonica-virtual/',
  sip: '/telefonia/lineas-sip-trunk/',
  centrales: '/telefonia/centrales-telefonicas/',
};
const link = (title, description, href) => ({ title, description, href });
export const telephonyPages = [
  {
    id: 'virtual',
    slug: 'central-telefonica-virtual',
    path: telephonyPaths.virtual,
    source: origin + telephonyPaths.virtual,
    title: 'Central telefónica virtual',
    headline: 'Tu equipo conectado. Tu central, en la nube.',
    description:
      'Organiza las llamadas y los anexos de tu empresa con una plataforma de telefonía IP en la nube.',
    icon: 'globe',
    image: 'phone.webp',
    imageAlt: 'Teléfono IP referencial',
    imageNote: 'Esquema referencial de telefonía en la nube.',
    introTitle: 'Una central que acompaña tu forma de trabajar.',
    introduction: [
      'La central se aloja en la nube y conecta a las personas de tu empresa a través de Internet. Una alternativa para equipos en oficina, otras sedes o trabajo remoto.',
      'Define cuántos anexos necesitas, cómo se distribuyen las llamadas y qué dispositivos utilizará tu equipo. La numeración, portabilidad y condiciones del servicio se revisan en la propuesta.',
    ],
    points: [
      [
        'Movilidad para tu equipo',
        'Atiende desde dispositivos compatibles según la configuración de tu servicio.',
      ],
      [
        'Administración de llamadas',
        'Organiza anexos y consulta las opciones del panel de control.',
      ],
      [
        'Implementación acompañada',
        'Evalúa conectividad, capacitación y alcance del soporte antes de activar.',
      ],
    ],
    linksTitle: 'Completa tu solución en la nube.',
    links: [
      link(
        'Solicitar una demostración',
        'Conversa con OmniMedia sobre tu operación.',
        '/contactenos/',
      ),
      link(
        'Líneas SIP Trunk',
        'Conoce la conectividad de llamadas por Internet.',
        telephonyPaths.sip,
      ),
      link(
        'Audios y menús IVR',
        'Saludos, mensajes de espera y atención telefónica.',
        '/servicios/audios-e-ivr/',
      ),
      link(
        'Equipos para tu equipo',
        'Explora teléfonos IP y analógicos.',
        '/productos/telefonos-ip-y-analogicos/',
      ),
    ],
  },
  {
    id: 'sip',
    slug: 'lineas-sip-trunk',
    path: telephonyPaths.sip,
    source: 'https://www.lineassiptrunk.com/',
    title: 'Líneas SIP Trunk',
    headline: 'Tus llamadas, por una nueva conexión.',
    description:
      'Conecta tu central telefónica con la red pública a través de Internet para realizar y recibir llamadas.',
    icon: 'phone',
    image: 'phone.webp',
    imageAlt: 'Teléfono IP referencial',
    imageNote: 'Esquema referencial de conectividad SIP Trunk.',
    introTitle: 'La conexión entre tu central y tus clientes.',
    introduction: [
      'Una troncal SIP proporciona conectividad telefónica a una central IP. Los canales determinan cuántas llamadas pueden cursarse al mismo tiempo; los anexos corresponden a los usuarios de tu central.',
      'Antes de integrar el servicio, revisa el modelo y versión de tu PBX o gateway, la conexión a Internet y el volumen de llamadas. La compatibilidad y capacidad se validan para cada instalación.',
    ],
    points: [
      [
        'Canales según tu operación',
        'Dimensiona las llamadas simultáneas que tu empresa necesita.',
      ],
      ['Integración con tu central', 'Evalúa tu PBX IP, Asterisk o gateway antes de configurar.'],
      [
        'Visibilidad del consumo',
        'Consulta las opciones de reportes y las condiciones comerciales.',
      ],
    ],
    linksTitle: 'Prepara tu conexión SIP.',
    links: [
      link(
        'Evaluar mi instalación',
        'Comparte el modelo de central y tus necesidades.',
        '/contactenos/',
      ),
      link(
        'Centrales telefónicas IP',
        'Explora las familias de centrales disponibles.',
        telephonyPaths.centrales,
      ),
      link(
        'Central telefónica virtual',
        'Conoce la alternativa de central en la nube.',
        telephonyPaths.virtual,
      ),
      link(
        'Información del servicio SIP Trunk',
        'Consulta el sitio de referencia de Líneas SIP Trunk.',
        'https://www.lineassiptrunk.com/',
      ),
    ],
  },
  {
    id: 'centrales',
    slug: 'centrales-telefonicas',
    path: telephonyPaths.centrales,
    source: origin + telephonyPaths.centrales,
    title: 'Centrales telefónicas IP',
    headline: 'El punto de encuentro de tus llamadas.',
    description:
      'Centrales Avaya, Yeastar y Grandstream para gestionar la telefonía de tu empresa, con venta, instalación y configuración.',
    icon: 'phone',
    image: 'central.webp',
    imageAlt: 'Central telefónica Yeastar PBX P560 del portafolio de OmniMedia',
    imageNote: 'Equipo referencial. Modelo y capacidad según evaluación.',
    introTitle: 'Una plataforma para organizar tu telefonía.',
    introduction: [
      'Una central IP administra la comunicación entre anexos y el acceso a las llamadas externas. El número de usuarios, las sedes y la capacidad de llamadas orientan la elección.',
      'OmniMedia ofrece equipos, licencias, programación y mantenimiento. Revisa las funciones y los requisitos de cada modelo para definir una solución acorde a tu instalación.',
    ],
    points: [
      ['Atención de llamadas', 'Evalúa transferencias, espera, buzón de voz y menús IVR.'],
      [
        'Capacidad para tu empresa',
        'Dimensiona usuarios, llamadas simultáneas y crecimiento previsto.',
      ],
      [
        'Instalación y mantenimiento',
        'Define configuración, licencias y acompañamiento en la propuesta.',
      ],
    ],
    linksTitle: 'Explora las centrales por marca.',
    links: [
      link('Centrales Avaya', 'Consulta las opciones de telefonía Avaya.', pbxBrandPaths.avaya),
      link(
        'Centrales Yeastar',
        'Conoce las alternativas de centrales Yeastar.',
        pbxBrandPaths.yeastar,
      ),
      link(
        'Centrales Grandstream',
        'Explora las centrales de la familia Grandstream.',
        pbxBrandPaths.grandstream,
      ),
      link(
        'Soporte técnico',
        'Revisa asistencia para tu instalación.',
        '/servicios/soporte-tecnico/',
      ),
    ],
  },
];
const localBySource = Object.fromEntries(
  [...telephonyPages, ...pbxBrandPages].map((page) => [page.source, page.path]),
);
export const localTelephonyHref = (href) => localBySource[href] ?? href;
