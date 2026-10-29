import { localPhoneHref } from './phone-catalog.mjs';
import { localHotelHref } from './hotel-pages.mjs';
import navigation from './navigation.json' with { type: 'json' };

const content = {
  phones: {
    slug: 'telefonos-ip-y-analogicos',
    headline: 'Una llamada. El equipo adecuado.',
    description: 'Teléfonos IP, SIP y analógicos para los distintos puestos de tu empresa.',
    image: 'phone.webp',
    imageAlt: 'Selección referencial de teléfonos del portafolio de OmniMedia Perú',
    imageNote: 'Teléfonos para oficina y atención empresarial.',
    introTitle: 'El teléfono que necesita cada puesto.',
    introduction: [
      'Recepción, oficinas y salas pueden necesitar equipos diferentes. Comienza por identificar cómo se realizan las llamadas y con qué central deben trabajar.',
      'Explora las familias Avaya, Fanvil, Poly, Yealink, Grandstream y Panasonic. La selección del modelo y su configuración se evalúa según tu instalación.',
    ],
    points: [
      ['Tipo de conexión', 'Revisa si tu instalación requiere telefonía IP, SIP o analógica.'],
      ['Uso del puesto', 'Considera funciones, pantalla y manejo de llamadas.'],
      ['Compatibilidad', 'Valida el modelo con la central y la red existentes.'],
    ],
    linksTitle: 'Explora teléfonos por marca.',
  },
  headsets: {
    slug: 'auriculares',
    headline: 'Más claridad en cada conversación.',
    description: 'Auriculares y altavoces para oficina, centros de contacto y trabajo híbrido.',
    image: 'headset.webp',
    imageAlt: 'Auriculares referenciales del portafolio de OmniMedia Perú',
    imageNote: 'Poly HP, Yealink y VT.',
    introTitle: 'Escuchar y participar con comodidad.',
    introduction: [
      'La elección de un auricular depende del entorno, el tiempo de uso y los dispositivos con los que se realizan las llamadas.',
      'Conoce las opciones Poly HP, Yealink y VT. Compara formatos y conexiones, y consulta las funciones de audio de cada modelo antes de elegir.',
    ],
    points: [
      ['Tu entorno', 'Considera el ruido y la forma de trabajar de cada usuario.'],
      ['Conexión', 'Valida la compatibilidad con teléfonos, computadoras y plataformas.'],
      ['Formato y uso', 'Evalúa movilidad, controles y comodidad para la jornada.'],
    ],
    linksTitle: 'Encuentra tu familia de auriculares.',
  },
  hotels: {
    slug: 'telefonia-hotelera',
    headline: 'La atención empieza con una llamada.',
    description: 'Teléfonos para conectar habitaciones, recepción y servicios de tu hotel.',
    image: 'hotel.webp',
    imageAlt: 'Teléfonos hoteleros referenciales Cetis y Fanvil',
    imageNote: 'Opciones para habitaciones y atención a huéspedes.',
    introTitle: 'Comunicación pensada para la hospitalidad.',
    introduction: [
      'El teléfono de una habitación conecta al huésped con la recepción y los servicios del hotel. Su elección debe considerar la central instalada y la experiencia de uso.',
      'Explora las alternativas Cetis y Fanvil. Dentro de Cetis encontrarás las familias Telematrix, Teledex y Scitec, con opciones que se revisan según el proyecto.',
    ],
    points: [
      ['Habitaciones', 'Evalúa formato, ubicación y facilidad de uso.'],
      ['Servicios del hotel', 'Define los accesos y las funciones que necesita el huésped.'],
      ['Integración', 'Revisa la compatibilidad con la central y la instalación.'],
    ],
    linksTitle: 'Explora telefonía para tu hotel.',
  },
  rooms: {
    slug: 'equipos-de-videoconferencia',
    headline: 'Equipa tu próxima reunión.',
    description: 'Cámaras, barras y sistemas para tus salas de videoconferencia.',
    image: 'video.webp',
    imageAlt: 'Equipos referenciales de videoconferencia del portafolio de OmniMedia Perú',
    imageNote: 'Equipos Poly HP y Yealink.',
    introTitle: 'Un equipo para cada sala.',
    introduction: [
      'El tamaño del espacio y la cantidad de participantes orientan la elección de cámaras, barras y sistemas de sala.',
      'Explora las familias Poly HP y Yealink. Antes de definir el equipo, considera la plataforma de reuniones, las conexiones y el alcance de instalación.',
    ],
    points: [
      ['Espacio', 'Revisa la distribución y el uso previsto de la sala.'],
      ['Audio y video', 'Evalúa encuadre, escucha y participación.'],
      ['Conexiones', 'Valida la plataforma y los dispositivos que se integrarán.'],
    ],
    linksTitle: 'Conoce las familias de equipos.',
  },
  network: {
    slug: 'networking',
    headline: 'La base de una empresa conectada.',
    description:
      'Switches, puntos de acceso y UPS para acompañar la infraestructura de tu empresa.',
    image: 'switch.webp',
    imageAlt: 'Switch de red referencial del portafolio de OmniMedia Perú',
    imageNote: 'Imagen referencial de equipos de red.',
    introTitle: 'Conecta tu infraestructura con criterio.',
    introduction: [
      'Una red empresarial reúne conexiones cableadas, acceso inalámbrico y equipos de respaldo eléctrico. La selección comienza por entender tu instalación.',
      'Explora switches de red, access points y UPS. Consulta las características y compatibilidad de cada familia para orientar el proyecto.',
    ],
    points: [
      ['Red cableada', 'Revisa los puertos y las necesidades de conexión.'],
      ['Acceso inalámbrico', 'Considera los espacios y dispositivos que usarán la red.'],
      ['Respaldo eléctrico', 'Evalúa los equipos y condiciones que requiere una UPS.'],
    ],
    linksTitle: 'Explora tu infraestructura de red.',
  },
  refurbished: {
    slug: 'accesorios-y-remanufacturados',
    headline: 'Nuevas opciones para tu instalación.',
    description:
      'Accesorios y equipos remanufacturados para evaluar la continuidad de tu telefonía.',
    image: 'central.webp',
    imageAlt: 'Imagen referencial de equipos de telefonía empresarial',
    imageNote: 'Imagen referencial. Consulta por marca y modelo.',
    introTitle: 'Parte de lo que tu empresa ya tiene.',
    introduction: [
      'Cuando necesitas ampliar o mantener una instalación existente, la evaluación puede incluir accesorios, repuestos y equipos remanufacturados.',
      'Comparte la marca, el modelo y la necesidad de tu sistema. La compatibilidad, el estado y la disponibilidad deben confirmarse en la propuesta comercial.',
    ],
    points: [
      ['Equipo existente', 'Identifica la marca y el modelo de tu instalación.'],
      ['Compatibilidad', 'Revisa las condiciones técnicas de la alternativa.'],
      ['Evaluación comercial', 'Confirma estado, disponibilidad y alcance de soporte.'],
    ],
    linksTitle: 'Consulta las opciones para tu equipo.',
  },
};

const families = navigation.find((item) => item.id === 'products').children;
const videoFamily = navigation
  .find((item) => item.id === 'solutions')
  .children.find((item) => item.id === 'video');
export const productPages = families.map((family) => {
  const entry = content[family.id];
  const categories =
    family.id === 'rooms' ? [...family.children, videoFamily.children[0]] : family.children;
  const links = categories.map((category) => ({
    title: category.label,
    description: 'Conoce las opciones de esta familia del portafolio.',
    href: localHotelHref(localPhoneHref(category.url)),
  }));
  if (!links.length)
    links.push(
      {
        title: 'Accesorios y remanufacturados',
        description: 'Consulta la información de esta categoría.',
        href: family.url,
      },
      {
        title: 'Soporte técnico',
        description: 'Conoce el servicio de asistencia para tu instalación.',
        href: 'https://www.omnimediaperu.com/servicios/soporte-tecnico/',
      },
      {
        title: 'Consultar por un equipo',
        description: 'Contacta al equipo comercial con tu marca y modelo.',
        href: 'https://www.omnimediaperu.com/contactenos/',
      },
    );
  return {
    ...entry,
    id: family.id,
    title: family.label,
    icon: family.icon,
    path: `/productos/${entry.slug}/`,
    source: family.url,
    links,
  };
});
export const productPaths = Object.fromEntries(productPages.map((page) => [page.id, page.path]));
