## Context

La app Angular actual tiene problemas de navegación y UI que afectan la experiencia del usuario:
- Links del header apuntan a rutas inexistentes (`/que-es`, `/flujo`, etc.)
- Secciones carecen de IDs para scroll suave
- Footer tiene texto genérico
- Cards de concept-section no tienen mismo alto

El sistema de routing actual usa `routerLink` que espera rutas Angular. Para scroll suave a secciones, se necesitan hash links nativos del navegador.

## Goals / Non-Goals

**Goals:**
- Corregir navegación para que todos los links funcionen
- Implementar scroll suave a secciones con IDs
- Actualizar texto del footer
- Alinear cards para tener mismo alto visual
- Mantener compatibilidad con responsive design

**Non-Goals:**
- Cambiar la arquitectura de componentes
- Modificar la lógica de negocio
- Agregar nuevas funcionalidades
- Cambiar el sistema de temas

## Decisions

### 1. Hash links vs Router navigation

**Decisión**: Usar hash links (`#id`) en lugar de `routerLink`.

**Razón**: Las secciones son parte de la misma página (`home`). El scroll suave es nativo del navegador con `scroll-behavior: smooth` en `html`. No se necesita la lógica de routing de Angular.

**Alternativa considerada**: Usar `routerLink` con fragmentos Angular (`/home#flujo`). Más complejo y requiere manejo manual de scroll.

### 2. IDs en secciones

**Decisión**: Agregar IDs directamente en los elementos `<section>`.

**Razón**: Los IDs son necesarios para que `href="#id"` funcione. Es estándar HTML y no requiere lógica adicional.

**Archivos afectados**:
- `flow-section/flow.html`: `id="flujo"`
- `concept-section/concept.html`: `id="que-es"`
- `pros-cons-section/pros-cons.html`: `id="ventajas"`

### 3. Alineación de cards

**Decisión**: Agregar `align-items: stretch` al grid de concept-section.

**Razón**: CSS Grid con `align-items: stretch` es la forma estándar de alinear items en cross-axis. Los componentes card ya tienen `display: flex; flex-direction: column` internamente.

**Alternativa considerada**: Usar `height: 100%` en cada card. Más frágil y requiere modificar cada componente.

### 4. Actualización de footer

**Decisión**: Actualizar directamente el template HTML.

**Razón**: Es un cambio de texto estático, no requiere lógica ni datos dinámicos.

## Risks / Trade-offs

- **Hash links rompen scroll-to-top automático**: Al hacer clic en un link hash, el navegador hace scroll automático. Si el usuario está en otra página, no navega a home. → Mitigación: Los links solo funcionan desde home (comportamiento esperado).

- **IDs duplicados potenciales**: Si se usan mismos IDs en múltiples páginas. → Mitigación: Solo hay una página con estas secciones (home).

- **Cards responsive**: En mobile, las cards se apilan verticalmente y el alineamiento no aplica. → Mitigación: El grid ya tiene media query para mobile (`grid-template-columns: 1fr`).

## Migration Plan

1. Actualizar `navigation.json` con hash links
2. Agregar IDs a las secciones
3. Actualizar texto del footer
4. Ajustar grid de concept-section
5. Probar navegación completa
6. Verificar responsive

## Open Questions

Ninguna. Todos los cambios son directos y no requieren decisiones adicionales.