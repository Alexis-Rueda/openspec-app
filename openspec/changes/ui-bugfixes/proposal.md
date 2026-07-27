## Why

Tres bugs de UI afectan la experiencia de usuario: el botón de tema no alterna entre oscuro/claro, los botones del hero recargan la página en vez de hacer scroll suave, y los links de navegación no funcionan en la página de ejemplo.

## What Changes

- Corregir el toggle del tema: el `effect()` se mueve al constructor de `App` (injection context válido), se lee `sessionStorage` sincrónicamente para inicializar el signal, y se guarda la preferencia en `sessionStorage`
- Agregar scroll suave a los botones del hero section: los `<a>` con hash links ejecutan la acción por defecto del navegador sin `preventDefault()`
- Adaptar navegación para la página de example: los links hash no funcionan fuera de home, se necesita detectar la ruta y mostrar solo "Inicio" cuando no estás en home

## Capabilities

### New Capabilities

- `theme-toggle`: Corrección del mecanismo de alternancia de tema oscuro/claro

### Modified Capabilities

- `hero-section`: Agregar scroll suave a los botones CTA del hero
- `example-page`: Adaptar navegación del header para funcionar correctamente en la página de ejemplo

## Impact

- **Archivos modificados:**
  - `src/app/app.ts` — Mover effect al constructor
  - `src/app/components/section/hero-section/hero.ts` — Inyectar Router, agregar scrollToSection
  - `src/app/components/section/hero-section/hero.html` — Agregar (click) handler a botones
  - `src/app/components/shared/header/header.ts` — Inyectar Router, detectar ruta actual
  - `src/app/components/shared/header/header.html` — Renderizado condicional de links
  - `src/app/data/navigation.json` — Potencialmente agregar link "Inicio"
- **Dependencias:** Ninguna nueva
- **Riesgo:** Bajo — fixes puntuales sin cambios estructurales
