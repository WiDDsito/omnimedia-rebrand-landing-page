import series from './hotel-series.json' with { type: 'json' };

/** @type {Record<string, {id: string, title: string, label: string, description: string, features: string[], pdf: string, image: string | null, note: string}[]>} */
const seriesByFamily = series;

export const hotelCatalogPath = '/productos/telefonia-hotelera/';
const root = '/telefonia/telefonos-hoteleros/';
const cetisPath = `${root}telefonos-hoteleros-cetis/`;
const content = [
  {
    id: 'cetis',
    title: 'Teléfonos hoteleros Cetis',
    path: cetisPath,
    headline: 'Cada espacio. Una forma de conectar.',
    description: 'Telematrix, Teledex y Scitec: tres familias para las comunicaciones de tu hotel.',
    image: 'hotel.webp',
    imageAlt: 'Selección referencial de teléfonos hoteleros del portafolio de OmniMedia',
    imageNote: 'Imagen referencial de telefonía hotelera.',
    introTitle: 'Del huésped a la recepción.',
    introduction: [
      'Cetis reúne las marcas Telematrix, Teledex y Scitec. El portafolio comprende equipos para habitaciones, vestíbulos, recepción y áreas comunes.',
      'Comienza por la familia que responde al uso del espacio. Después, revisa con nuestro equipo la conexión, los accesos a servicios y la central que utiliza tu hotel.',
    ],
    points: [
      ['El espacio', 'Habitaciones, recepción y áreas comunes requieren formatos diferentes.'],
      ['La experiencia', 'Define cómo accederán los huéspedes a cada servicio.'],
      ['La instalación', 'Comprueba la conexión antes de elegir el equipo.'],
    ],
  },
  {
    id: 'fanvil',
    title: 'Teléfonos hoteleros Fanvil',
    path: `${root}telefonos-hoteleros-fanvil/`,
    headline: 'Una mejor atención, en cada llamada.',
    description: 'Conoce los teléfonos IP Fanvil H5 y H2U para habitaciones y servicios del hotel.',
    image: 'hotels/fanvil-1.webp',
    imageAlt: 'Teléfono hotelero Fanvil H5',
    imageNote: 'Fanvil H5. Imagen del catálogo original.',
    introTitle: 'Telefonía IP para la hospitalidad.',
    introduction: [
      'La selección hotelera Fanvil del sitio original presenta los modelos H5 y H2U. Compara sus formatos y funciones para orientar tu elección.',
      'La integración depende de la red y la central IP instaladas. Revisa las fichas técnicas y comparte los ambientes que necesitas conectar.',
    ],
    points: [
      ['El puesto', 'Evalúa si necesitas pantalla o un formato compacto.'],
      ['La red', 'Verifica la infraestructura IP y la alimentación del equipo.'],
      ['Los servicios', 'Define las llamadas y accesos que se programarán.'],
    ],
  },
  {
    id: 'telematrix',
    parentId: 'cetis',
    title: 'Cetis · Telematrix',
    path: `${cetisPath}telematrix/`,
    headline: 'El teléfono también forma parte del espacio.',
    description:
      'Explora las series 9600, 3300, 3100 y Trimline para distintos ambientes del hotel.',
    image: 'hotels/telematrix-2.webp',
    imageAlt: 'Selección de teléfonos Cetis Telematrix serie 3300',
    imageNote: 'Telematrix 3300. Funciones según configuración.',
    introTitle: 'Diseño y comunicación en la misma habitación.',
    introduction: [
      'Telematrix ofrece formatos con cable e inalámbricos. Las alternativas analógicas y VoIP dependen de la serie y del modelo.',
      'Compara el espacio disponible, la movilidad y los servicios que utilizará el huésped antes de definir una configuración.',
    ],
    points: [
      ['El formato', 'Elige entre escritorio, inalámbrico o un equipo estrecho.'],
      ['La conexión', 'Distingue las versiones analógicas de las opciones VoIP.'],
      ['La configuración', 'Confirma las funciones del modelo seleccionado.'],
    ],
  },
  {
    id: 'teledex',
    parentId: 'cetis',
    title: 'Cetis · Teledex',
    path: `${cetisPath}teledex/`,
    headline: 'Encuentra el formato de tu hospitalidad.',
    description:
      'Siete series Teledex para evaluar la comunicación en las habitaciones de tu hotel.',
    image: 'hotels/teledex-1.webp',
    imageAlt: 'Selección de teléfonos hoteleros Cetis Teledex serie Opal',
    imageNote: 'Teledex Opal. Imagen del catálogo original.',
    introTitle: 'Una familia para cada necesidad.',
    introduction: [
      'El catálogo presenta Opal, Diamond, Nugget, D, I, E y M.',
      'Compara el espacio y las funciones de cada serie. Confirma la configuración con tu central.',
    ],
    points: [
      ['Espacio', 'Define dónde se ubicará el equipo.'],
      ['Funciones', 'Prioriza los accesos que utilizará el huésped.'],
      ['Conexión', 'Valida la versión antes de cotizar.'],
    ],
  },
  {
    id: 'scitec',
    parentId: 'cetis',
    title: 'Cetis · Scitec',
    path: `${cetisPath}scitec/`,
    headline: 'Comunicación esencial, al alcance.',
    description: 'Conoce las familias Aegis 08 y Emergency del portafolio hotelero Scitec.',
    image: 'hotels/scitec-1.webp',
    imageAlt: 'Selección de teléfonos Cetis Scitec del catálogo original',
    imageNote: 'Imagen general de la familia Scitec.',
    introTitle: 'El equipo adecuado para cada punto de atención.',
    introduction: [
      'Scitec reúne alternativas para habitaciones, vestíbulos y áreas comunes. La página original desarrolla las familias Aegis 08 y Emergency.',
      'Identifica el uso de cada punto y consulta las fichas técnicas antes de definir la instalación. Las funciones se confirman para el modelo seleccionado.',
    ],
    points: [
      ['Ubicación', 'Identifica dónde se necesita el punto de comunicación.'],
      ['Uso', 'Distingue la atención cotidiana de los puntos de emergencia.'],
      ['Integración', 'Comprueba la compatibilidad con tu sistema.'],
    ],
  },
];

export const hotelPages = content.map((page) => ({
  ...page,
  icon: 'phone',
  source: `https://www.omnimediaperu.com${page.path}`,
  series: seriesByFamily[page.id] ?? [],
  linksTitle:
    page.id === 'cetis' ? 'Elige tu familia Cetis.' : 'Sigue explorando telefonía hotelera.',
  links: [
    ...content
      .filter((item) =>
        page.id === 'cetis' ? item.parentId === 'cetis' : item.id !== page.id && !item.parentId,
      )
      .map((item) => ({
        title: item.title,
        description: item.description,
        href: item.path,
        actionLabel: 'Explorar la familia',
      })),
    {
      title: 'Asesoría para tu hotel',
      description: 'Comparte tu central, ambientes y necesidades de atención.',
      href: '/contactenos/',
      actionLabel: 'Ver canales de contacto',
    },
  ],
}));

const localPaths = new Map([
  [`https://www.omnimediaperu.com${root}`, hotelCatalogPath],
  ...hotelPages.map((page) => [page.source, page.path]),
]);
export const localHotelHref = (href) => localPaths.get(href) ?? href;
