## Why

La guía interactiva de OpenSpec necesita una sección de "Comandos útiles" que muestre los 14 comandos esenciales (7 CLI + 7 chat) con filtrado por tipo. Actualmente solo existe en el prototype HTML estático (`assets/`), no como componente Angular.

## What Changes

- Nuevo componente `commands-section` con tabs de filtro (Todos / Terminal / Chat) y lista dinámica de comandos
- Nuevo archivo de datos `commands.json` con los 14 comandos de la landing
- Nueva interfaz `CommandItem` y `CommandsData`
- Método `getCommands()` agregado al `ContentService`
- Integración en `home-page` como sección después de pros-cons

## Capabilities

### New Capabilities

- `commands-display`: Renderizado de la lista de comandos con diseño grid responsive (3 columnas desktop, 1 columna mobile)
- `commands-filter`: Filtrado por tipo (all/cli/chat) usando Angular signals con tabs accesibles (ARIA tablist)

### Modified Capabilities

<!-- No hay capacidades existentes cuyos requisitos cambien -->

## Impact

- **Archivos nuevos**: 5 archivos (interface, JSON, componente TS/HTML/CSS)
- **Archivos modificados**: 2 (content.service.ts, home.ts)
- **Dependencias**: Ninguna nueva. Usa patterns existentes (signals, content service, design tokens)
- **Breaking changes**: Ninguno
