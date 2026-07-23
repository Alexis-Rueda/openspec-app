## ADDED Requirements

### Requirement: Concept section displays "¿Qué es OpenSpec?"
The system SHALL render a full-width section with eyebrow label, headline, lead paragraph, and a grid of 3 cards explaining OpenSpec.

#### Scenario: Section renders with correct structure
- **WHEN** the home page loads
- **THEN** a section with eyebrow "01 · Concepto" SHALL appear below the hero section
- **AND** a headline "¿Qué es OpenSpec?" SHALL be visible
- **AND** a lead paragraph describing spec-driven development SHALL be visible
- **AND** a grid of 3 cards SHALL be rendered below the lead

### Requirement: Content comes from ContentService
The component SHALL obtain its data via ContentService.getConcept() returning a Signal of ConceptData.

#### Scenario: Data is bound from ContentService
- **WHEN** ConceptSection initializes
- **THEN** it SHALL call ContentService.getConcept()
- **AND** bind eyebrow, title, lead, and cards array to the template

### Requirement: Section uses standard layout classes
The component SHALL use `.os-section` wrapper and `.os-container` inner wrapper for consistent spacing.

#### Scenario: Section uses global spacing utilities
- **WHEN** ConceptSection is rendered
- **THEN** the outer element SHALL have class `os-section`
- **AND** the inner container SHALL have class `os-container`

### Requirement: Three cards in responsive grid
The 3 cards SHALL display in a 3-column grid on desktop (>900px) and stack vertically on mobile.

#### Scenario: Desktop displays 3 columns
- **WHEN** viewport width is above 900px
- **THEN** the card grid SHALL display 3 cards in a single row with equal column widths

#### Scenario: Mobile stacks cards
- **WHEN** viewport width is 900px or below
- **THEN** the card grid SHALL stack cards vertically, one per row
