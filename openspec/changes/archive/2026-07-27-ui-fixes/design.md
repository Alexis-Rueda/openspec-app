## Context

La app Angular actual tiene problemas de navegación y UI que afectan la experiencia del usuario:
- Links del header apuntan a rutas inexistentes (`/que-es`, `/flujo`, etc.)
- Secciones carecen de IDs para scroll suave
- Footer tiene texto genérico
- Cards de concept-section no tienen mismo alto
- Header no se mantiene sticky al hacer scroll

El sistema de routing actual usa `routerLink` que espera rutas Angular. Para scroll suave a secciones, se necesitan hash links. Angular intercepta clicks en `<a>` tags, por lo que se requiere scroll manual.

## Goals / Non-Goals

**Goals:**
- Corregir navegación para que todos los links funcionen
- Implementar scroll suave a secciones con IDs
- Actualizar texto del footer
- Alinear cards para tener mismo alto visual
- Header sticky con feedback visual al scroll
- Mantener compatibilidad con responsive design

**Non-Goals:**
- Cambiar la arquitectura de componentes
- Modificar la lógica de negocio
- Agregar nuevas funcionalidades
- Cambiar el sistema de temas

## Decisions

### 1. Hash links con scroll manual vs Router navigation

**Decisión**: Usar hash links (`#id`) con `scrollToSection()` que llama `scrollIntoView({ behavior: 'smooth' })`.

**Razón**: Angular intercepta clicks en `<a>` tags incluso sin `routerLink`, causando recarga de página. El scroll manual con `scrollIntoView` es nativo del navegador y evita la interferencia de Angular.

**Alternativa considerada**: Usar `routerLink` con fragmentos Angular (`/home#flujo`). Más complejo y requiere `anchorScrolling: 'enabled'` en el router.

### 2. IDs en secciones

**Decisión**: Agregar IDs directamente en los elementos `<section>`.

**Razón**: Los IDs son necesarios para que `href="#id"` funcione. Es estándar HTML y no requiere lógica adicional.

**Archivos afectados**:
- `flow-section/flow.html`: `id="flujo"`
- `concept-section/concept.html`: `id="que-es"`
- `pros-cons-section/pros-cons.html`: `id="ventajas"`

### 3. Alineación de cards

**Decisión**: Cambiar `:host` de `<app-card>` a `display: flex; flex-direction: column` y agregar `flex: 1` a `.os-card`.

**Razón**: CSS Grid stretching no funciona correctamente con componentes Angular porque el custom element wrapper (`<app-card>` con `display: block`) no transmite el alto del grid item. Al hacer `:host` un flex container y `.os-card` `flex: 1`, la card llena el espacio disponible.

**Alternativa considerada**: Usar `height: 100%` en cada card. Más frágil y requiere modificar cada componente.

### 4. Header sticky con display:contents

**Decisión**: Cambiar `:host` de `<app-header>` a `display: contents`.

**Razón**: En el layout Angular, `<app-header>` es un flex item dentro de `main-layout`. `position: sticky` no funciona correctamente cuando el elemento sticky está dentro de un flex item wrapper. `display: contents` elimina el wrapper del rendering tree, making `<header class="os-header">` un hijo directo del flex container, igual que en el asset de referencia.

### 5. Header scroll feedback

**Decisión**: Agregar signal `isScrolled` con listener de scroll y clase CSS `.is-scrolled`.

**Razón**: El usuario necesita feedback visual de que el header es sticky. El cambio de fondo de transparente a opaco con sombra sutil indica que la página se ha desplazado.

### 6. Actualización de footer

**Decisión**: Actualizar directamente el template HTML.

**Razón**: Es un cambio de texto estático, no requiere lógica ni datos dinámicos.

## Risks / Trade-offs

- **Hash links rompen scroll-to-top automático**: Al hacer clic en un link hash, el navegador hace scroll automático. Si el usuario está en otra página, no navega a home. → Mitigación: Los links solo funcionan desde home (comportamiento esperado).

- **IDs duplicados potenciales**: Si se usan mismos IDs en múltiples páginas. → Mitigación: Solo hay una página con estas secciones (home).

- **Cards responsive**: En mobile, las cards se apilan verticalmente y el alineamiento no aplica. → Mitigación: El grid ya tiene media query para mobile (`grid-template-columns: 1fr`).

- **display:contents y accesibilidad**: `display: contents` puede causar problemas con screen readers en algunos navegadores. → Mitigación: `<app-header>` no tiene contenido accesible propio; el contenido está en el `<header>` interno.

## Migration Plan

1. Actualizar `navigation.json` con hash links
2. Agregar `scrollToSection()` en header.ts para scroll manual
3. Agregar IDs a las secciones
4. Actualizar texto del footer
5. Cambiar `:host` de `<app-header>` a `display: contents`
6. Cambiar `:host` de `<app-card>` a `display: flex` y `.os-card` a `flex: 1`
7. Agregar `isScrolled` signal y `.is-scrolled` CSS
8. Probar navegación completa
9. Verificar responsive

## Open Questions

Ninguna. Todos los cambios son directos y no requieren decisiones adicionales.