## Why

Con flow-section completado, la home-page necesita la sección "Ventajas y desventajas" que contrasta los beneficios de OpenSpec frente a las limitaciones actuales. Sin esta sección, el visitante no tiene contexto para evaluar si OpenSpec es adecuado para su caso de uso, lo que reduce la credibilidad de la propuesta.

## What Changes

- Crear `pros-cons-section` — componente section-level con eyebrow, headline, lead párrafo, grid de pros (3-4 items) y grid de cons (3-4 items)
- Crear `pros-cons.json` — contenido estático con listas de ventajas y desventajas
- Agregar interfaz `ProsConsData` con `ProsItem` y `ConsItem`
- Extender `ContentService` con método `getProsCons()`
- Integrar `ProsConsSection` en `home-page` debajo del flow-section

## Capabilities

### New Capabilities
- `pros-cons-section`: Sección ventajas y desventajas — eyebrow, headline, lead, grid de pros y cons con iconos, título y descripción

### Modified Capabilities
- (ninguna)

## Impact

- `src/app/pages/home/home-page.ts` — integra ProsConsSection debajo de FlowSection
- `src/app/services/content.service.ts` — añade método getProsCons()
- `src/app/data/navigation.json` — ya incluye "Ventajas" → "/ventajas"; sin cambios
- Nuevos archivos: 3 (componente, interfaz, data JSON)
