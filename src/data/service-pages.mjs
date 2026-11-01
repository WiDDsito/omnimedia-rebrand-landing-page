export const servicePages = [
  {
    id: 'support',
    slug: 'soporte-tecnico',
    path: '/servicios/soporte-tecnico/',
    title: 'Soporte técnico',
    icon: 'grid',
    headline: 'Tu telefonía, con soporte cercano.',
    description:
      'Revisión, configuración y mantenimiento de centrales telefónicas IP, con atención remota o presencial según la evaluación del servicio.',
    image: 'central.webp',
    imageAlt: 'Imagen referencial de centrales telefónicas empresariales',
    imageNote: 'Asistencia para tu instalación de telefonía.',
    introTitle: 'Empieza por entender tu instalación.',
    introduction: [
      'Una incidencia, un cambio de configuración o una revisión preventiva requieren conocer el sistema instalado. Comparte la marca, el modelo y lo que necesitas resolver.',
      'OmniMedia ofrece soporte para centrales telefónicas IP, programación, actualización y mantenimiento. La modalidad de atención, las actividades y los tiempos se definen en cada propuesta.',
    ],
    points: [
      [
        'Revisión técnica',
        'Describe la incidencia y los equipos que forman parte de tu instalación.',
      ],
      [
        'Configuración y mantenimiento',
        'Evalúa los ajustes, actualizaciones o tareas que necesita tu sistema.',
      ],
      ['Atención acordada', 'Define el alcance del servicio y la modalidad remota o presencial.'],
    ],
    linksTitle: 'Conoce el servicio y prepara tu consulta.',
    linksDescription:
      'Consulta la información original o comparte los datos de tu instalación para orientar la evaluación.',
    source: 'https://www.omnimediaperu.com/servicios/soporte-tecnico/',
    links: [
      {
        title: 'Soporte técnico especializado',
        description: 'Revisa el alcance informativo del servicio original.',
        href: 'https://www.omnimediaperu.com/servicios/soporte-tecnico/',
      },
      {
        title: 'Programación y mantenimiento',
        description: 'Conoce los servicios para centrales telefónicas IP.',
        href: 'https://www.omnimediaperu.com/servicios/',
      },
      {
        title: 'Consultar por tu instalación',
        description: 'Comparte marca, modelo y el requerimiento de tu empresa.',
        href: 'https://www.omnimediaperu.com/contactenos/',
      },
    ],
  },
  {
    id: 'ivr',
    slug: 'audios-e-ivr',
    path: '/servicios/audios-e-ivr/',
    title: 'Audios e IVR',
    icon: 'speaker',
    headline: 'La voz de tu empresa, desde el primer contacto.',
    description:
      'Mensajes de bienvenida, espera, horarios y menús IVR para acompañar la atención telefónica de tu empresa.',
    image: 'headset.webp',
    imageAlt: 'Imagen referencial de auriculares para comunicación por voz',
    imageNote: 'Imagen referencial. Grabaciones para tu central.',
    introTitle: 'Un mensaje claro para cada momento.',
    introduction: [
      'El saludo inicial, las opciones del menú y los mensajes de espera orientan a quien llama. Define qué información necesita escuchar y cómo debe continuar la atención.',
      'Explora las muestras publicadas por OmniMedia para bienvenida, publicidad en espera, fuera de horario e IVR. El guion, la voz y el formato de entrega se coordinan según tu central y tu requerimiento.',
    ],
    points: [
      ['Bienvenida y espera', 'Presenta tu empresa y comparte información durante la llamada.'],
      ['Horarios y avisos', 'Orienta al cliente cuando cambia la disponibilidad de atención.'],
      ['Menús IVR', 'Organiza las opciones de contacto con mensajes comprensibles.'],
    ],
    linksTitle: 'Escucha ejemplos y conoce las opciones.',
    linksDescription:
      'Los enlaces de audio abren muestras del sitio original. No se reproducen automáticamente.',
    source: 'https://www.omnimediaperu.com/telefonia/audios-para-centrales-telefonicas/',
    links: [
      {
        title: 'Saludo de bienvenida',
        description: 'Escucha una muestra para el inicio de la llamada.',
        href: 'https://www.omnimediaperu.com//wp-content/uploads/2020/04/saludo-audios-para-su-central-telefonica-omnimedia-peru.mp3',
        actionLabel: 'Escuchar muestra de audio',
      },
      {
        title: 'Publicidad en espera',
        description: 'Escucha un ejemplo para esperas y transferencias.',
        href: 'https://www.omnimediaperu.com//wp-content/uploads/2020/04/publicidad-audios-para-su-central-telefonica-omnimedia-peru.mp3',
        actionLabel: 'Escuchar muestra de audio',
      },
      {
        title: 'Fuera de horario',
        description: 'Escucha una muestra sobre la atención de tu empresa.',
        href: 'https://www.omnimediaperu.com//wp-content/uploads/2020/04/fuera-de-horario-audios-para-su-central-telefonica-omnimedia-peru.mp3',
        actionLabel: 'Escuchar muestra de audio',
      },
      {
        title: 'Menú IVR',
        description: 'Escucha un ejemplo de opciones de atención telefónica.',
        href: 'https://www.omnimediaperu.com//wp-content/uploads/2020/04/ivr-audios-para-su-central-telefonica-omnimedia-peru.mp3',
        actionLabel: 'Escuchar muestra de audio',
      },
      {
        title: 'Ver el servicio completo',
        description: 'Consulta las modalidades y otras muestras del sitio original.',
        href: 'https://www.omnimediaperu.com/telefonia/audios-para-centrales-telefonicas/',
      },
      {
        title: 'Consultar por tus mensajes',
        description: 'Comparte el guion y la central que utiliza tu empresa.',
        href: 'https://www.omnimediaperu.com/contactenos/',
      },
    ],
  },
];
export const servicePaths = Object.fromEntries(servicePages.map((page) => [page.id, page.path]));
