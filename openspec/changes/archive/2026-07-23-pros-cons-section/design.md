## Context

Flow-section completado. Home-page tiene HeroSection, ConceptSection, FlowSection en ese orden. ContentService expone getNavigation(), getHero(), getConcept(), getWorkflowSteps(). Navigation.json ya incluye "Ventajas" → "/ventajas". El contenido fuente vive en `assets/index.html` sección "Ventajas y desventajas" con 6 pros y 6 cons.

## Goals / Non-Goals

**Goals:**
- Crear pros-cons-section con eyebrow, headline, lead, y dos columnas (pros / cons)
- Extraer contenido a pros-cons.json estático
- Definir interfaz ProsConsData con listas tipadas
- Extender ContentService con método getProsCons()
- Integrar pros-cons-section en home-page debajo de flow-section

**Non-Goals:**
- No implementar lazy-loading (es parte de la home-page estática)
- No crear ruta independiente para /ventajas
- No añadir filtros ni búsqueda en lista
- No reutilizar Card component (layout de dos columnas con listas, no cards)

## Decisions

### Layout de dos columnas vs. grid de cards
Se usan dos columnas lado a lado: izquierda "Ventajas" (badge verde +), derecha "Desventajas" (badge rojo −). Cada columna es un `<ul>` con items. En mobile → stack vertical. No se reutiliza Card porque el patrón visual (lista con bullets vs. card con icono) es distinto.

### Datos en pros-cons.json
Sigue el patrón de `flow.json`: objeto con `eyebrow`, `title`, `lead`, `pros: string[]`, `cons: string[]`. 6 items por lado según referencia.

### Alternating background
ProsConsSection usa fondo alternativo (`os-section os-section-alt`) como flow-section, para mantener ritmo visual en la página.

### Integración en home-page
Importación estática directa (mismo patrón que FlowSection). Se renderiza `<app-pros-cons-section />` debajo de `<app-flow-section />`.

## Risks / Trade-offs

- [Lista plana vs. objetos] → Items son strings simples ahora. Si se necesitan categorías o variantes luego, se migra a objetos con `{ label, description, severity }`. Cambio compatible.
- [Dos columnas en desktop] → Si el contenido de pros/cons es muy desigual, una columna puede verse más larga. Se maneja con `align-items: start` para que cada columna crezca independiente.
