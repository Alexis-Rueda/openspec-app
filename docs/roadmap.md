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
   1. ── [X] scaffold-base
   2. ── [X] hero-section + terminal
   3. ── [X] concept-section + card
   4. ── [X] flow-section
   5. ── [X] pros-cons-section
   6. ── [X] commands-section
   7. ── [X] example-page (lazy route)
   8. ── [X] cta-section + clipboard
   9. ── [] ui-fixes (header, navbar, hero, theme, footer)
```

### ✅ 1. `scaffold-base` — Estructura base (COMPLETADO)

**Artefactos**: proposal · design · specs · tasks

Crea toda la estructura vacía: layouts, routing, header, footer, theme system, content service, interfaces base, navigation data.

**Footer**: Texto actual → "Página informativa no oficial. Hecha por Alexis Rueda para el equipo de Evertec México." + enlace "Volver arriba".

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

Añade `flow-section`, `workflow-steps.json`, `flow-step.interface.ts`, método `getFlow()`.

**Orden del flujo** (5 pasos):
1. `/opsx:explore` — Explore
2. `/opsx:propose` — Propose
3. `/opsx:apply` — Apply
4. `/opsx:sync` — Sync
5. `/opsx:archive` — Archive

**Archivos nuevos**:
- `src/app/components/section/flow-section/`
- `src/app/interfaces/flow-step.interface.ts`
- `src/app/data/workflow-steps.json`

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

**Flujo del ejemplo** (comienza con explore):
1. `/opsx:explore` — Explore (definir requisitos)
2. `/opsx:propose` — Propose
3. `/opsx:apply` — Apply
4. `/opsx:sync` — Sync
5. `/opsx:archive` — Archive

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

---

### ⬜ 9. `ui-fixes` — Correcciones de UX y navegación

**Depende de**: scaffold-base, hero-section, flow-section, commands-section

Corrige problemas de navegación, interacción y apariencia en la app.

**Tareas**:
1. **Header sticky**: Verificar que `position: sticky` funcione correctamente (revisar overflow de parents). Asegurar que el header se mantenga visible al hacer scroll.
2. **Navbar links**: Cambiar `routerLink` a hash links (`#que-es`, `#flujo`, `#ventajas`, `#comandos`) con scroll suave. Los links actuales apuntan a rutas que no existen.
3. **Hero buttons**: Los botones "Ver el flujo" (`#flujo`) y "Comandos útiles" (`#comandos`) deben hacer scroll suave a sus secciones. Verificar que los IDs existan en el DOM.
4. **Theme toggle**: Verificar que `applyThemeEffect()` se inicialice al arrancar la app. El botón ya llama a `toggleTheme()`.
5. **Footer**: Actualizar texto a "Página informativa no oficial. Hecha por Alexis Rueda para el equipo de Evertec México."

**Archivos a modificar**:
- `src/app/components/shared/header/header.html` — links de navegación
- `src/app/components/shared/header/header.ts` — lógica de scroll
- `src/app/components/shared/footer/footer.html` — texto del footer
- `src/app/components/section/hero-section/hero.html` — botones CTA
- `src/app/components/section/flow-section/flow.html` — agregar `id="flujo"`
- `src/app/data/navigation.json` — cambiar rutas a hash links
- `src/app/utils/theme.ts` — verificar inicialización
- `src/app/app.component.ts` — llamar `applyThemeEffect()` en init
