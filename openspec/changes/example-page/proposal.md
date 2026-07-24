## Why

La app necesita una página que muestre un ejemplo interactivo del flujo de trabajo de OpenSpec. Los usuarios nuevos necesitan ver cómo los comandos `/opsx:*` se usan en la práctica, paso a paso, con terminales reales mostrando comandos y salidas. Actualmente no existe tal página en la aplicación.

## What Changes

- Crear página lazy-loaded en `/example` con stepper horizontal interactivo
- Crear interfaz `ExampleStep` y `ExampleData` para modelar los pasos del flujo
- Crear `example.json` con el contenido de los 5 pasos del flujo OpenSpec (explore, propose, apply, sync, archive)
- Agregar método `getExample()` al `ContentService` para servir los datos
- Agregar ruta `/example` lazy-loaded a `app.routes.ts`
- Corregir `navigation.json` para que el link "Ejemplo" apunte a `/example`

## Capabilities

### New Capabilities

- `example-page`: Página independiente que muestra el flujo OpenSpec como stepper horizontal interactivo con terminales dinámicos. Incluye navigación entre pasos via click en stepper y botones prev/next.

### Modified Capabilities

<!-- Ninguna capability existente cambia a nivel de requisitos -->

## Impact

- **Archivos nuevos**: 5
  - `src/app/pages/example/example-page.ts` — componente de página lazy-loaded
  - `src/app/pages/example/example-page.html` — template con stepper y terminal
  - `src/app/pages/example/example-page.css` — estilos del stepper y layout
  - `src/app/interfaces/example-step.interface.ts` — interfaces ExampleStep y ExampleData
  - `src/app/data/example.json` — contenido de los 5 pasos
- **Archivos modificados**: 3
  - `src/app/app.routes.ts` — agregar ruta `/example`
  - `src/app/services/content.service.ts` — agregar `getExample()`
  - `src/app/data/navigation.json` — corregir href de `/ejemplo` a `/example`
- **Dependencias**: Ninguna nueva
- **Breaking changes**: Ninguno
