## Why

Con el hero section completado, la página principal necesita el siguiente bloque de contenido: la sección "¿Qué es OpenSpec?" que explica el concepto central de spec-driven development. Sin esta sección, el visitante no entiende qué hace OpenSpec ni cómo funciona, lo que reduce el impacto del hero.

## What Changes

- Crear `concept-section` — componente section-level con eyebrow, headline, párrafo lead y grid de 3 cards explicativas
- Crear `card` — componente compartible reutilizable que renderiza icono, título y descripción
- Agregar `concept.json` — contenido estático (textos, cards con icono/título/descripción)
- Agregar interfaz `ConceptData` y `CardData`
- Extender `ContentService` con método `getConcept()`
- Integrar `ConceptSection` en `home-page` debajo del hero section

## Capabilities

### Nuevas Capacidades
- `concept-section`: Concept section — eyebrow, headline, lead paragraph, grid de 3 cards explicativas
- `card-reuse`: Componente Card reutilizable — icono, título y descripción con estilos encapsulados

### Modified Capabilities
- (ninguna)

## Impact

- `src/app/pages/home/home-page.ts` — integra ConceptSection debajo de HeroSection
- `src/app/services/content.service.ts` — añade método getConcept()
- `src/app/styles.css` — sin cambios (estilos encapsulados en componentes)
- Nuevos archivos: 4 componentes/interfaces/data
