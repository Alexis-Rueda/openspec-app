
## Contexto del proyecto

App Angular que funciona como guía interactiva de OpenSpec. Se construye usando el mismo flujo OpenSpec (dogfooding).

### Reglas de arquitectura

- **No modificar `assets/` directamente**. Es contenido fuente de referencia.
- Assets de la app Angular van en `public/` o `src/assets/` si se crea.
- Todo cambio significativo debe pasar por el ciclo OpenSpec (propose → apply).
- Los componentes nuevos deben ser standalone (default en Angular v22+) y lazy-loaded.
- Las especs viven en `openspec/specs/`, los changes en `openspec/changes/`.

### Git Workflow

- **Al hacer apply de un change OpenSpec o skill spec-impl, crear siempre una nueva rama git** antes de implementar:
  ```bash
  git checkout -b <nombre-del-change>
  ```
- La rama se nombra igual que el change (ej: `scaffold-base`, `hero-section`).
- Al completar el apply y antes de archive, crear un commit con los cambios.
- La rama se mergea a `main` al finalizar el ciclo completo (apply → sync → archive).
- No trabajar directamente en `main` para cambios OpenSpec.

### Skills disponibles

- `angular-developer` — Generar código Angular y arquitectura
- `vitest` — Tests unitarios
- `frontend-design` — UI de alta calidad
- `typescript-advanced-types` — Tipos complejos

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- **IMPORTANTE:** Siempre usar archivos separados `.component.html` / `.component.css` cuando template >3 líneas o styles >3 líneas. NO usar inline para bloques grandes.
- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Inline template solo para 3 líneas o menos; caso contrario crear `.component.html`
- Inline styles solo para 3 líneas o menos; caso contrario crear `.component.css`
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection
