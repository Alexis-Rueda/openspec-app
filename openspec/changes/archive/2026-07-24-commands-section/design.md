## Context

La guía interactiva de OpenSpec tiene 5 secciones completadas (hero, concept, flow, pros-cons). La sección de comandos es la siguiente en el roadmap. El prototype HTML en `assets/` ya define el diseño visual y la interacción de filtrado con JS vanilla. Este cambio migra esa funcionalidad a un componente Angular con signals.

Componentes existentes usan: `inject(ContentService)`, JSON import estático, `signal()` para datos, archivos separados TS/HTML/CSS, estilos con prefijo `.os-`, BEM-like naming.

## Goals / Non-Goals

**Goals:**
- Componente `commands-section` que muestre 14 comandos con diseño grid responsive
- Tabs de filtro (Todos / Terminal / Chat) con Angular signals
- Accesibilidad completa: ARIA tablist, aria-selected, aria-label
- Seguir patterns existentes del proyecto (content service, interfaces, data files)

**Non-Goals:**
- No reutilizar componente `card` (el diseño row grid es más apropiado para referencia)
- No agregar búsqueda de texto
- No animaciones de transición entre filtros
- No cambios al router o lazy loading (es sección inline en home)

## Decisions

### 1. Filtrado con Angular signals en vez de DOM manipulation

**Decisión**: Usar `signal` para filtro activo + `computed` para lista filtrada.

**Alternativas consideradas**:
- DOM manipulation como el prototype JS → Rechazado: no es idiomático Angular, dificulta testing
- ` NgClass` + `*ngIf` → Rechazado: Angular v22+ default es signals, proyecto ya los usa

**Razón**: Signals ya son el patrón del proyecto. `computed` deriving del filtro es limpio, testeable, y sin side effects.

### 2. Datos en JSON estático importado via resolveJsonModule

**Decisión**: `commands.json` en `src/app/data/`, importado directamente en `content.service.ts`.

**Alternativas consideradas**:
- Fetch HTTP → Rechazado: innecesario para datos estáticos, introduce async innecesario
-提供edor de tokens → Rechazado: overkill para 14 items

**Razón**: Consistente con hero.json, concept.json, workflow-steps.json, pros-cons.json.

### 3. Grid CSS responsive sin breakpoints custom

**Decisión**: Usar el mismo patrón del prototype: `grid-template-columns: minmax(220px, 300px) 1fr auto` en desktop, `1fr` en mobile (≤620px).

**Razón**: Ya está probado en el prototype. Un solo breakpoint simplifica mantenimiento.

### 4. Badge inline sin componente shared

**Decisión**: Badge de tipo (`terminal`/`chat`) renderizado inline en el template con `@if` para el texto.

**Alternativas consideradas**:
- Componente `badge` shared → Rechazado: solo 2 variantes, 14 usos, no justifica componente
- `ngClass` dinámico → Rechazado: usar `[class]` binding directo

**Razón**: Complejidad mínima, Zero overhead de componente extra.

## Risks / Trade-offs

- **[Riesgo]** CSS variables podrían no estar disponibles si los design tokens fallan → **Mitigación**: Los tokens ya funcionan en las 4 secciones existentes
- **[Riesgo]** El `id="comandos"` en el section podría chocar con el anchor link de hero → **Mitigación**: Hero usa `#comandos`, mismo id, funciona correctamente
- **[Trade-off]** No hay transición animada al filtrar → Aceptado: simplifica implementación, el prototype tampoco la tiene
