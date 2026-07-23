# SPEC 01 — Workflow section (flow-section)

> **Status:** Approved
> **Depends on:** scaffold-base
> **Date:** 2026-07-23
> **Objective:** Añadir la sección "El flujo de trabajo" con los 4 pasos del workflow OpenSpec (propose → apply → sync → archive) presentados en cards con badge numérico y flechas conectoras.

## Scope

**In:**

- Componente `flow-section` en `components/section/flow-section/` (`.ts`, `.html`, `.css`)
- Interface `WorkflowStep` + `WorkflowData` en `interfaces/workflow-step.interface.ts`
- Archivo `data/workflow-steps.json` con los 4 pasos
- Método `getWorkflowSteps(): Signal<WorkflowData>` en `ContentService`
- Eyebrow `"02 · Workflow"`, headline `"El flujo de trabajo"`, lead, grid 4 cards con badge numérico y flechas `→` / `↓`
- Fondo alternado (`.os-section-alt`), hover effect

**Out of scope:**

- CTA o navegación a `/example`
- Iconos en steps
- Interactividad click/expand
- Testing automatizado

## Data model

```typescript
// src/app/interfaces/workflow-step.interface.ts
export interface WorkflowStep {
  command: string;
  title: string;
  description: string;
}

export interface WorkflowData {
  eyebrow: string;
  title: string;
  lead: string;
  steps: WorkflowStep[];
}
```

```json
// src/app/data/workflow-steps.json
{
  "eyebrow": "02 · Workflow",
  "title": "El flujo de trabajo",
  "lead": "El camino por defecto tiene cuatro fases. Las de terminal (<code>openspec</code>) gestionan el estado; las del chat (<code>/opsx:</code>) ejecutan el trabajo con la IA.",
  "steps": [
    {
      "command": "/opsx:propose",
      "title": "Propose",
      "description": "Describes la intención y OpenSpec redacta una propuesta de cambio con requisitos y specs afectadas."
    },
    {
      "command": "/opsx:apply",
      "title": "Apply",
      "description": "La IA implementa el código siguiendo la propuesta aprobada, fase por fase."
    },
    {
      "command": "/opsx:sync",
      "title": "Sync",
      "description": "Se reconcilian las specs con lo realmente construido para que la fuente de verdad quede al día."
    },
    {
      "command": "/opsx:archive",
      "title": "Archive",
      "description": "El cambio completado se archiva y las specs quedan como el nuevo estado base del proyecto."
    }
  ]
}
```

## Implementation plan

0. Crear branch `spec-01-flow-section` desde `main`
1. Crear `src/app/interfaces/workflow-step.interface.ts` con `WorkflowStep` y `WorkflowData`
2. Crear `src/app/data/workflow-steps.json` con los 4 pasos
3. Agregar `getWorkflowSteps()` en `ContentService` retornando `Signal<WorkflowData>`
4. Crear `src/app/components/section/flow-section/flow.html` con eyebrow, headline, lead, y `@for` grid de cards con badge numérico, command en `<code>`, descripción
5. Crear `src/app/components/section/flow-section/flow.css` con grid 4-columnas, flechas `→` vía `::after` entre steps, hover effect, responsive ≤900px (1 columna, flecha `↓`)
6. Crear `src/app/components/section/flow-section/flow.ts`: standalone, selector `app-flow-section`, injecta `ContentService`, expone `protected readonly workflowData`
7. Importar `<app-flow-section />` en `src/app/pages/home/home-page.ts` debajo de `<app-concept-section />`

## Acceptance criteria

- [ ] `WorkflowStep` + `WorkflowData` existen con los campos especificados
- [ ] `workflow-steps.json` contiene 4 steps en orden propose → apply → sync → archive
- [ ] `ContentService.getWorkflowSteps()` retorna `Signal<WorkflowData>`
- [ ] `app-flow-section` renderiza eyebrow, headline, lead y 4 cards
- [ ] Cada card muestra badge numérico (1-4), command en `<code>`, descripción
- [ ] Flechas `→` entre steps en desktop, `↓` en mobile
- [ ] Hover eleva card 4px + cambia borde a accent
- [ ] Sección con clase `os-section-alt`
- [ ] Grid 4-columnas en >900px, 1-columna en ≤900px
- [ ] `<app-flow-section />` aparece en home-page debajo de concept-section
- [ ] `ng build` exitoso sin errores

## Decisions

- **Sí:** `command` + `title` + `description` por step. El comando se renderiza en `<code>`.
- **No:** `icon` en steps. Se usa badge numérico (1-4) como en el reference.
- **Sí:** Grid 4-columnas con flechas conectoras (`→` / `↓`) entre steps vía `::after`.
- **No:** Timeline vertical.
- **Sí:** Fondo alternado (`.os-section-alt`) como en el reference.
- **No:** CTA a `/example` (se abordará en spec futura si aplica).
- **Sí:** Datos vía JSON + `ContentService`, mismo patrón que hero y concept.
- **No:** Datos inline en el componente.

## What is **not** in this spec

- Navegación o CTA a `/example`
- Iconos en los steps (se usa badge numérico)
- Interactividad click/expand
- Testing automatizado
