## ADDED Requirements

### Requirement: Navigation links SHALL use hash links for same-page sections
The header navigation links for sections within the home page SHALL use hash links (`#id`) instead of router routes. Links to other pages (like `/example`) SHALL continue using router routes.

#### Scenario: User clicks navigation link to section
- **WHEN** user clicks "Qué es" link in header
- **THEN** page scrolls smoothly to element with `id="que-es"`

#### Scenario: User clicks navigation link to other page
- **WHEN** user clicks "Ejemplo" link in header
- **THEN** navigation occurs to `/example` route

### Requirement: Sections SHALL have IDs for scroll targeting
All sections that are targets of hash links SHALL have unique `id` attributes on their `<section>` elements.

#### Scenario: Flow section has correct ID
- **WHEN** flow-section component renders
- **THEN** `<section>` element has `id="flujo"`

#### Scenario: Concept section has correct ID
- **WHEN** concept-section component renders
- **THEN** `<section>` element has `id="que-es"`

#### Scenario: Pros-cons section has correct ID
- **WHEN** pros-cons-section component renders
- **THEN** `<section>` element has `id="ventajas"`

### Requirement: Footer SHALL display attribution text
The footer SHALL display the text "Página informativa no oficial. Hecha por Alexis Rueda para el equipo de Evertec México." with a "Volver arriba" link.

#### Scenario: Footer shows correct attribution
- **WHEN** footer component renders
- **THEN** text contains "Alexis Rueda" and "Evertec México"

#### Scenario: Footer has scroll-to-top link
- **WHEN** user clicks "Volver arriba" in footer
- **THEN** page scrolls to top

### Requirement: Concept cards SHALL have equal height
Cards in the concept section SHALL have equal height when displayed in the grid on desktop viewports.

#### Scenario: Desktop grid alignment
- **WHEN** viewport width is greater than 900px
- **AND** concept cards are rendered in grid
- **THEN** all cards have the same visual height

#### Scenario: Mobile layout
- **WHEN** viewport width is 900px or less
- **AND** concept cards are rendered
- **THEN** cards stack vertically with individual heights