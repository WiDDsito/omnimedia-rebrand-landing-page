# Imágenes WebP — 28 de octubre de 2026

Se sustituyeron los nueve recursos de `public/images` y la sala de reuniones de `src/assets` por WebP. Se reutilizaron las seis conversiones proporcionadas en el disco externo; las otras cuatro se convirtieron con Sharp, calidad 82. Se verificaron dimensiones idénticas y conservación de transparencia. Los originales siguen recuperables en el historial Git, sin duplicar los recursos publicados.

Las referencias de componentes, campañas, Soluciones, Productos y la portada del catálogo usan `.webp`. Astro mantiene sus variantes optimizadas de la sala de reuniones. Las capturas históricas de documentación no son recursos de la web y conservan su formato.

| Recurso | Antes (bytes) | WebP (bytes) | Origen |
| --- | ---: | ---: | --- |
| `avaya-j129.webp` | 141341 | 14040 | Conversión nueva |
| `central.webp` | 24111 | 4624 | Conversión nueva |
| `headset.webp` | 64617 | 40236 | Conversión proporcionada |
| `hotel.webp` | 71835 | 10168 | Conversión nueva |
| `logo.webp` | 12307 | 4984 | Conversión proporcionada |
| `perifoneo.webp` | 74733 | 67194 | Conversión proporcionada |
| `phone.webp` | 69450 | 62518 | Conversión proporcionada |
| `switch.webp` | 28507 | 15560 | Conversión proporcionada |
| `video.webp` | 44968 | 27276 | Conversión proporcionada |
| `meeting-room.webp` | 2178261 | 100132 | Conversión nueva |

Total de archivos fuente: 2,710,130 → 346,732 bytes (87.2% menos). Esta cifra mide los archivos fuente, no el peso total de la página ni el ahorro de transferencia: Astro ya optimizaba la sala de reuniones antes de esta migración.

El fallo de Vercel informado corresponde al commit antiguo `4d24d60`: la regla `assets` de `.vercelignore` excluía `src/assets`. La corrección `044f0a6` cambió la regla a `/assets`, manteniendo los recursos importados. Esa corrección permanece; la conversión a WebP no sustituye la regla correcta.

Verificación local: Astro check sin errores/advertencias/hints, 16 pruebas aprobadas y build de 12 páginas. Las nuevas pruebas detectan referencias JPG/PNG, archivos WebP ausentes y la regla de exclusión que ocasionó el error. Revisión en navegador de logo, hero y recursos de Productos sin imágenes rotas observadas.
