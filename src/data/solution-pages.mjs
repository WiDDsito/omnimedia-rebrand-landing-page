const origin = 'https://www.omnimediaperu.com';
const link = (title, description, path) => ({
  title,
  description,
  href: path.startsWith('https://') ? path : origin + path,
});
const video = '/productos/equipos-y-camaras-de-videoconferencia-poly-yealink-logitech/';
const yealink = video + 'barras-y-sistemas-de-videoconferencia-yealink/';
const poly = video + 'equipos-y-camaras-de-videoconferencia-poly-hp/';
const audio = '/telefonia/equipos-de-perifoneo/';
const contact = '/telefonia/plataformas-para-contacto-masivo/';
export const solutionPages = [
  {
    id: 'telefonia',
    familyId: 'phone',
    slug: 'telefonia-empresarial',
    path: '/soluciones/telefonia-empresarial/',
    title: 'Telefonía empresarial',
    headline: 'Telefonía que conecta a tu empresa.',
    description:
      'Centrales físicas y virtuales, conectividad SIP y equipos para acompañar las llamadas de tu operación.',
    image: 'phone.webp',
    imageAlt: 'Teléfonos IP del portafolio de OmniMedia Perú',
    imageNote: 'Centrales, conectividad y equipos.',
    icon: 'phone',
    introTitle: 'Cada empresa tiene su forma de comunicarse.',
    introduction: [
      'Una oficina, varias sedes o un equipo que trabaja a distancia. La solución de telefonía debe responder a cómo se organiza tu empresa y cómo atiendes a tus clientes.',
      'OmniMedia integra centrales telefónicas, líneas SIP Trunk y equipos IP. La evaluación de tu instalación permite definir qué conservar, qué incorporar y cómo acompañar la implementación.',
    ],
    points: [
      ['Centrales físicas o virtuales', 'Evalúa la plataforma según tu operación y conectividad.'],
      [
        'Equipos para tu equipo',
        'Explora teléfonos, auriculares y opciones de telefonía hotelera.',
      ],
      ['Implementación y soporte', 'Define el alcance de instalación, configuración y asistencia.'],
    ],
    linksTitle: 'Explora telefonía empresarial.',
    links: [
      link(
        'Central telefónica virtual',
        'Telefonía IP en la nube para tu empresa.',
        '/telefonia/central-telefonica-virtual/',
      ),
      link(
        'Líneas SIP Trunk',
        'Conectividad para realizar y recibir llamadas por Internet.',
        'https://www.lineassiptrunk.com/',
      ),
      link(
        'Centrales telefónicas IP',
        'Conoce las opciones de centrales y sus marcas.',
        '/telefonia/centrales-telefonicas/',
      ),
      link(
        'Teléfonos IP, SIP y analógicos',
        'Equipos para distintos puestos y necesidades de comunicación.',
        '/telefonia/telefonos-analogicos-digitales-ip/',
      ),
      link(
        'Telefonía hotelera',
        'Teléfonos y alternativas para la atención a huéspedes.',
        '/telefonia/telefonos-hoteleros/',
      ),
      link(
        'Auriculares profesionales',
        'Headsets para oficina, atención al cliente y trabajo móvil.',
        '/telefonia/headset-auriculares/',
      ),
      link(
        'Audios e IVR para centrales',
        'Saludos, menús y mensajes para tu atención telefónica.',
        '/telefonia/audios-para-centrales-telefonicas/',
      ),
    ],
    source: origin + '/telefonia/',
  },
  {
    id: 'video',
    familyId: 'video',
    slug: 'videoconferencia',
    path: '/soluciones/videoconferencia/',
    title: 'Videoconferencia',
    headline: 'Tu equipo, en la misma conversación.',
    description:
      'Cámaras, barras y sistemas de videoconferencia para reunir a quienes están en la sala y a quienes participan a distancia.',
    image: 'video.webp',
    imageAlt: 'Barra y equipos de videoconferencia del portafolio de OmniMedia',
    imageNote: 'Poly HP y Yealink para tus reuniones.',
    icon: 'video',
    introTitle: 'Una sala preparada para participar.',
    introduction: [
      'Una reunión híbrida necesita que las personas puedan verse, escucharse y compartir ideas. El tamaño de la sala, la distribución del espacio y la forma de trabajar orientan la elección del equipo.',
      'Explora las soluciones Poly HP y Yealink: cámaras, barras de video, sistemas de sala y pantallas interactivas. La propuesta puede incluir instalación y configuración según el alcance del proyecto.',
    ],
    points: [
      ['Para tu espacio', 'Evalúa el equipo según la sala y sus participantes.'],
      ['Audio y video', 'Reúne los elementos que necesita una conversación híbrida.'],
      ['Integración de sala', 'Considera conexiones, plataforma de reuniones y configuración.'],
    ],
    linksTitle: 'Encuentra tu solución de sala.',
    links: [
      link('Videoconferencia Yealink', 'Barras, sistemas y pantallas interactivas.', yealink),
      link('Videoconferencia Poly HP', 'Cámaras y equipos para tus espacios de reunión.', poly),
      link(
        'Barras de videoconferencia Yealink',
        'Explora los equipos de la familia MeetingBar.',
        yealink + 'barras-de-videoconferencia-yealink/',
      ),
      link(
        'Sistemas de videoconferencia Yealink',
        'Conoce las opciones de sistemas de sala.',
        yealink + 'sistema-de-videoconferencia-yealink/',
      ),
      link(
        'MeetingBoard Pro',
        'Pantalla interactiva para espacios de colaboración.',
        '/pantalla-interactiva-meetingboard-pro-yealink-2/',
      ),
      link(
        'Sistemas Poly Studio',
        'Explora cámaras y sistemas de la familia Poly Studio.',
        poly + 'sistema-de-videoconferencia-poly-studio/',
      ),
    ],
    source: origin + video,
  },
  {
    id: 'perifoneo',
    familyId: 'audio',
    slug: 'perifoneo-y-megafonia',
    path: '/soluciones/perifoneo-y-megafonia/',
    title: 'Perifoneo y megafonía',
    headline: 'Tu mensaje, en cada espacio.',
    description:
      'Soluciones de audio y perifoneo para comunicar avisos y coordinar a las personas dentro de tus instalaciones.',
    image: 'perifoneo.webp',
    imageAlt: 'Equipos para perifoneo y megafonía del portafolio de OmniMedia',
    imageNote: 'Consolas, altavoces y equipos SIP.',
    icon: 'speaker',
    introTitle: 'Comunicación para tus instalaciones.',
    introduction: [
      'El perifoneo permite llevar anuncios y avisos operativos a distintos espacios de una organización. La distribución del lugar y las zonas de atención son el punto de partida para evaluar una solución.',
      'OmniMedia ofrece consolas SIP, gateways de audio y video, altavoces y equipos para debate. Conoce cómo estas familias pueden formar parte de la comunicación de tus instalaciones.',
    ],
    points: [
      ['Avisos por voz', 'Comunica mensajes a los espacios donde se necesitan.'],
      ['Equipos SIP', 'Evalúa su integración con la telefonía de tu instalación.'],
      ['Según el entorno', 'Considera áreas, distribución y necesidades de comunicación.'],
    ],
    linksTitle: 'Conoce las familias de equipos.',
    links: [
      link(
        'Teléfonos consola SIP',
        'Equipos para gestionar anuncios y comunicaciones.',
        audio + 'telefonos-consola-sip/',
      ),
      link(
        'Gateways SIP de audio y video',
        'Conexión entre equipos y sistemas de comunicación.',
        audio + 'gateway-sip-de-audio-y-video/',
      ),
      link(
        'Altavoces SIP',
        'Equipos para avisos por voz y perifoneo IP.',
        audio + 'altavoces-sip/',
      ),
      link(
        'Controladores y micrófonos para debate',
        'Opciones de audio para reuniones y participación presencial.',
        audio + 'controlador-y-microfonos-para-debate/',
      ),
    ],
    source: origin + audio,
  },
  {
    id: 'atencion',
    familyId: 'contact',
    slug: 'atencion-al-cliente',
    path: '/soluciones/atencion-al-cliente/',
    title: 'Atención al cliente',
    headline: 'Cada conversación merece atención.',
    description:
      'Organiza las conversaciones, llamadas y campañas de tu empresa con herramientas para acompañar a tus clientes.',
    image: 'headset.webp',
    imageAlt: 'Auriculares profesionales para equipos de atención al cliente',
    imageNote: 'Conversaciones, llamadas y seguimiento.',
    icon: 'chat',
    introTitle: 'Una atención mejor organizada.',
    introduction: [
      'Cuando varias personas atienden a tus clientes, contar con herramientas adecuadas ayuda a organizar los canales y dar seguimiento a las conversaciones.',
      'Conoce las plataformas de WhatsApp multiagente, contact center y atención telefónica automática. También puedes explorar grabación, tarificación y herramientas de contacto masivo según las necesidades de tu operación.',
    ],
    points: [
      ['Conversaciones compartidas', 'Explora la atención de WhatsApp con varios agentes.'],
      ['Atención telefónica', 'Conoce opciones para organizar y distribuir llamadas.'],
      ['Seguimiento de la operación', 'Evalúa herramientas de grabación, consumo y campañas.'],
    ],
    linksTitle: 'Elige qué necesitas organizar.',
    links: [
      link(
        'WhatsApp multiagente',
        'Conversaciones y llamadas desde una plataforma para tu equipo.',
        '/plataforma-multiagente-de-whatsapp/',
      ),
      link(
        'Contact center',
        'Herramientas para campañas de llamadas de entrada y salida.',
        contact + 'software-para-contact-center/',
      ),
      link(
        'Atención telefónica automática',
        'Respuesta interactiva de voz para la atención telefónica.',
        contact + 'atencion-telefonica-automatica/',
      ),
      link(
        'Grabación de llamadas',
        'Explora opciones de registro para tu telefonía.',
        contact + 'plataforma-para-grabacion-de-llamadas/',
      ),
      link(
        'Tarificación de llamadas',
        'Gestión y reportes de consumo telefónico.',
        contact + 'software-para-tarificacion-de-llamadas/',
      ),
      link(
        'IVR masivos',
        'Herramientas para campañas con mensajes de audio.',
        contact + 'plataforma-para-ivr-masivos/',
      ),
      link(
        'SMS masivos',
        'Mensajes para campañas y comunicaciones con tus clientes.',
        contact + 'plataforma-para-sms-masivos/',
      ),
    ],
    source: origin + contact,
  },
];
export const solutionPaths = Object.fromEntries(solutionPages.map((page) => [page.id, page.path]));
