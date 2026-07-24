## Why

La guía interactiva de OpenSpec necesita una sección CTA (Call to Action) al final de la home page que invite al usuario a instalar OpenSpec con un comando copiable. Actualmente la home termina en la sección de comandos sin un cierre que conduza a la acción. Además, la sección pros-cons usa `os-section-alt` (fondo oscuro) cuando debería usar `os-section` (fondo normal) para mantener la alternancia visual correcta.

## What Changes

- Nuevo componente `cta-section` con comando de instalación y botón copiar al portapapeles
- Nueva util `clipboard.ts` usando `navigator.clipboard.writeText()` moderno
- Nuevo archivo de datos `cta.json` con el contenido de la sección
- Nueva interfaz `CtaData` y `CtaLink`
- Método `getCta()` agregado al `ContentService`
- Integración en `home-page` como última sección (después de commands)
- **FIX**: Sección pros-cons cambia de `os-section-alt` a `os-section` (fondo normal)

## Capabilities

### New Capabilities

- `cta-install`: Sección CTA final con comando de instalación, botón copiar al portapapeles, y enlace a documentación

### Modified Capabilities

- `pros-cons-section`: Requisito de fondo alternado cambia — de `os-section os-section-alt` a solo `os-section` para corrección visual

## Impact

- **Archivos nuevos**: 6 archivos (interface, JSON, util, componente TS/HTML/CSS)
- **Archivos modificados**: 3 (content.service.ts, home.ts, pros-cons.html)
- **Dependencias**: Ninguna nueva. Usa `navigator.clipboard` API nativa del browser
- **Breaking changes**: Ninguno
