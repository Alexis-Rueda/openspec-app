## Context

La guía interactiva de OpenSpec tiene 6 secciones completadas en la home page: hero, concept, flow, pros-cons, commands. La sección CTA es la última pieza del roadmap (paso 8). El prototype HTML en `assets/` ya define un comando de instalación con botón copiar. Este cambio migra esa funcionalidad a un componente Angular con signals.

Componentes existentes usan: `inject(ContentService)`, JSON import estático, `signal()` para datos, archivos separados TS/HTML/CSS, estilos con prefijo `.os-`, BEM-like naming.

La sección pros-cons actualmente usa `os-section-alt` (fondo oscuro `#0e141d`) pero debería usar `os-section` (fondo normal) para mantener la alternancia visual correcta.

## Goals / Non-Goals

**Goals:**
- Componente `cta-section` con comando de instalación centrado y botón copiar
- Util `clipboard.ts` con `navigator.clipboard.writeText()` moderno
- Feedback visual de "copiado" con timeout de 2 segundos
- Seguir patterns existentes del proyecto (content service, interfaces, data files)
- Fix: pros-cons usa `os-section` en vez de `os-section-alt`

**Non-Goals:**
- No fallback para browsers sin soporte `navigator.clipboard` (todos los modernos lo soportan)
- No animaciones de entrada o transiciones complejas
- No lazy loading (es sección inline en home)
- No cambios al router

## Decisions

### 1. Clipboard API nativa sin polyfill

**Decisión**: Usar `navigator.clipboard.writeText()` directamente.

**Alternativas consideradas**:
- Polyfill `clipboardy` → Rechazado: dependencia innecesaria para una llamada API
- `document.execCommand('copy')` fallback → Rechazado: API deprecada, todos los browsers modernos soportan `navigator.clipboard`

**Razón**: API nativa, zero dependencies, simple. Los browsers que no la soportan son irrelevantes para una herramienta de desarrollo.

### 2. Feedback visual con signal + setTimeout

**Decisión**: Signal `copied` que se pone `true` al copiar, se resetea a `false` después de 2 segundos.

**Alternativas consideradas**:
- Toast/notification system → Rechazado: overkill para una acción simple
- CSS animation loop → Rechazado: estado explícito es más testeable

**Razón**: Simple, predecible, sin dependencias. El usuario ve confirmación inmediata.

### 3. Datos en JSON estático importado via resolveJsonModule

**Decisión**: `cta.json` en `src/app/data/`, importado directamente en `content.service.ts`.

**Razón**: Consistente con hero.json, concept.json, workflow-steps.json, pros-cons.json, commands.json.

### 4. Sección con fondo normal (`os-section`)

**Decisión**: CTA usa `os-section` (fondo normal `var(--os-bg)`), no `os-section-alt`.

**Razón**: La alternancia visual queda: normal → normal → dark → normal → dark → normal. CTA como cierre visual limpio.

### 5. Fix pros-cons: remove `os-section-alt`

**Decisión**: Cambiar `os-section os-section-alt` a solo `os-section` en pros-cons.html.

**Razón**: Corrige la alternancia visual. La spec existente `pros-cons-section` se actualizará para reflejar este cambio.

## Risks / Trade-offs

- **[Riesgo]** `navigator.clipboard` requiere contexto seguro (HTTPS o localhost) → **Mitigación**: En desarrollo siempre es localhost, en producción será HTTPS
- **[Riesgo]** Spec existente `pros-cons-section` mentiona `os-section-alt` → **Mitigación**: Se crea delta spec para actualizar el requisito
- **[Trade-off]** Sin fallback para clipboard → Aceptado: target audience son developers con browsers modernos
