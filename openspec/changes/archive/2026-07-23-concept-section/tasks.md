## 1. Interfaces y data

- [x] 1.1 Crear `src/app/interfaces/card-data.interface.ts` con CardData { icon: string; title: string; description: string } y ConceptData { eyebrow: string; title: string; lead: string; cards: CardData[] }
- [x] 1.2 Crear `src/app/data/concept.json` con contenido completo: eyebrow "01 · Concepto", headline "¿Qué es OpenSpec?", lead paragraph, y 3 cards (📋 Specs como fuente de verdad, 🔀 Cambios propuestos, 🤖 Pensado para agentes)

## 2. Card shared component

- [x] 2.1 Crear `src/app/components/shared/card/card.ts` — Componente standalone con inputs `icon` (string), `title` (string), `description` (string). Template: `<article class="os-card"><div class="os-card-icon">{{ icon }}</div><h3>{{ title }}</h3><p>{{ description }}</p></article>`
- [x] 2.2 Estilos encapsulados en `card.css`: .os-card con fondo superficie, border-radius, padding; .os-card-icon con tamaño y espaciado; h3 y p con tipografía

## 3. Concept section component

- [x] 3.1 Crear `src/app/components/section/concept-section/concept.ts` — Componente standalone que usa ContentService.getConcept() y renderiza la sección con Card
- [x] 3.2 Template: section.os-section > div.os-container > div con eyebrow span + h2.os-text-balance + p.os-text-pretty + grid de 3 app-card
- [x] 3.3 Estilos encapsulados en `concept.css`: layout del grid 3 columnas desktop / stack mobile, estilos de eyebrow, headline, lead

## 4. Content service update

- [x] 4.1 Agregar método getConcept(): Signal<ConceptData> en content.service.ts que importa concept.json y devuelve señal

## 5. Integration con home-page

- [x] 5.1 Importar ConceptSection en home-page.ts y renderizar `<app-concept-section />` debajo de `<app-hero-section />`
