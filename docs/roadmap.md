# Roadmap

Secuencia de cambios planificados para construir la guía interactiva de OpenSpec.

## Convenciones

- **Naming**: kebab-case, inglés
- **Arquitectura**: `layouts/`, `pages/`, `components/section/`, `components/shared/`, `services/`, `interfaces/`, `data/`, `utils/`
- **Contenido**: JSON imports estáticos via `resolveJsonModule`, servidos por `content.service`
- **Estilos**: Prefijo `.os-` en globales, componentes con estilos encapsulados
- **Tema**: `utils/theme.ts` con señal global + localStorage
- **Ruteo**: `/` → redirect `/home`. Cada sección es componente independiente en `home-page`. `example-section` migrará a page lazy.

## Changes

```
   1. ── [x] scaffold-base (COMPLETADO ✓)
   2. ── [] hero-section + terminal
   3. ── [] concept-section + card
   4. ── [] flow-section
   5. ── [] pros-cons-section
   6. ── [] commands-section
   7. ── [] example-page (lazy route)
   8. ── [] cta-section + clipboard
```

### ✅ 1. `scaffold-base` — Estructura base (COMPLETADO)

**Artefactos**: proposal · design · specs · tasks

Crea toda la estructura vacía: layouts, routing, header, footer, theme system, content service, interfaces base, navigation data.

**Archivos creados**:
- `src/styles.css` — design tokens prefijados `.os-*`
- `src/app/layouts/main-layout/`
- `src/app/pages/home/` — placeholder
- `src/app/components/shared/header/`
- `src/app/components/shared/footer/`
- `src/app/components/section/` — vacío (para changes siguientes)
- `src/app/services/content.service.ts`
- `src/app/interfaces/nav-link.interface.ts`
- `src/app/data/navigation.json`
- `src/app/utils/theme.ts`
- `src/app/app.routes.ts` — rutas `/` → `/home`
- `docs/roadmap.md`

---

### ⬜ 2. `hero-section` — Sección Hero

**Depende de**: scaffold-base

Añade `hero-section`, `terminal` (shared), `hero.json`, `hero-data.interface.ts`, método `getHero()` en content service.

**Archivos nuevos**:
- `src/app/components/section/hero-section/`
- `src/app/components/shared/terminal/`
- `src/app/interfaces/hero-data.interface.ts`
- `src/app/interfaces/terminal-line.interface.ts`
- `src/app/data/hero.json`

---

### ⬜ 3. `concept-section` — Sección "Qué es OpenSpec"

**Depende de**: scaffold-base

Añade `concept-section`, `card` (shared), `concept.json`, `card-data.interface.ts`, método `getConcept()`.

**Archivos nuevos**:
- `src/app/components/section/concept-section/`
- `src/app/components/shared/card/`
- `src/app/interfaces/card-data.interface.ts`
- `src/app/data/concept.json`

---

### ⬜ 4. `flow-section` — Sección "El flujo de trabajo"

**Depende de**: scaffold-base

Añade `flow-section`, `flow.json`, `flow-step.interface.ts`, método `getFlow()`.

**Archivos nuevos**:
- `src/app/components/section/flow-section/`
- `src/app/interfaces/flow-step.interface.ts`
- `src/app/data/flow.json`

---

### ⬜ 5. `pros-cons-section` — Sección "Ventajas y desventajas"

**Depende de**: scaffold-base

Añade `pros-cons-section`, `pros-cons.json`, `pros-cons-data.interface.ts`, método `getProsCons()`.

**Archivos nuevos**:
- `src/app/components/section/pros-cons-section/`
- `src/app/interfaces/pros-cons-data.interface.ts`
- `src/app/data/pros-cons.json`

---

### ⬜ 6. `commands-section` — Sección "Comandos útiles"

**Depende de**: scaffold-base, (opcional) card

Añade `commands-section` con tabs de filtro y lista dinámica de comandos. `commands.json` con los 14 comandos de la landing.

**Archivos nuevos**:
- `src/app/components/section/commands-section/`
- `src/app/interfaces/command-item.interface.ts`
- `src/app/data/commands.json`

---

### ⬜ 7. `example-page` — Página de ejemplo interactivo

**Depende de**: scaffold-base, terminal

Migra `example-section` de ser un componente en home-page a una página lazy con ruta `/example`. Incluye el paso a paso interactivo con terminal dinámico.

**Archivos nuevos**:
- `src/app/pages/example/` — lazy loaded page
- `src/app/interfaces/example-step.interface.ts`
- `src/app/data/example.json`
- Ruta `/example` en `app.routes.ts`

---

### ⬜ 8. `cta-section` — Sección CTA final

**Depende de**: scaffold-base

Añade `cta-section` con comando de instalación y botón copiar. `clipboard.ts` util, `cta.json`.

**Archivos nuevos**:
- `src/app/components/section/cta-section/`
- `src/app/utils/clipboard.ts`
- `src/app/interfaces/cta-data.interface.ts`
- `src/app/data/cta.json`
