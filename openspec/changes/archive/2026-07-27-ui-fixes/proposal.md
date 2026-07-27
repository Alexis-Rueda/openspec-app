## Why

Los links de navegación en el header apuntan a rutas que no existen (`/que-es`, `/flujo`, etc.), causando 404 al hacer clic. Las secciones carecen de IDs para que el scroll suave funcione. El footer tiene texto genérico en lugar del crédito requerido. Las cards de "Qué es OpenSpec" no tienen el mismo alto visual. El header no se mantiene sticky al hacer scroll.

## What Changes

- **Navbar links**: Cambiar de rutas absolutas a hash links (`#que-es`, `#flujo`, `#ventajas`, `#comandos`) con scroll manual via `scrollToSection()`
- **Secciones**: Agregar IDs faltantes (`id="que-es"`, `id="flujo"`, `id="ventajas"`) para scroll suave desde hero y navbar
- **Footer**: Actualizar texto a "Página informativa no oficial. Hecha por Alexis Rueda para el equipo de Evertec México."
- **Concept cards**: Ajustar `<app-card>` host y `.os-card` para que las cards tengan el mismo alto visual
- **Header sticky**: Cambiar `<app-header>` a `display: contents` para que `position: sticky` funcione dentro del flex layout de Angular
- **Header scroll feedback**: Agregar signal `isScrolled` y clase `.is-scrolled` para feedback visual al scroll

## Capabilities

### New Capabilities

No hay nuevas funcionalidades. Son mejoras de UI existente.

### Modified Capabilities

No hay cambios en requerimientos de specs existentes.

## Impact

- `src/app/data/navigation.json` — estructura de links
- `src/app/components/shared/header/header.html` — template del header (condicional hash/router)
- `src/app/components/shared/header/header.ts` — lógica de scroll y scroll feedback
- `src/app/components/shared/footer/footer.html` — texto del footer
- `src/app/components/shared/card/card.css` — host display:flex para equal height
- `src/app/components/section/flow-section/flow.html` — ID de sección
- `src/app/components/section/concept-section/concept.html` — ID de sección
- `src/app/components/section/concept-section/concept.css` — alineación de grid
- `src/app/components/section/pros-cons-section/pros-cons.html` — ID de sección
- `src/styles.css` — `.is-scrolled` CSS class