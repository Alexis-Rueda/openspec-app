# CtaInstall

## Purpose

Full-width installation CTA section with copy-to-clipboard and documentation link.

## Requirements

### Requirement: CtaSection renders installation CTA

The system SHALL render a full-width section with an installation command and a copy-to-clipboard button.

#### Scenario: Section renders with correct structure

- **WHEN** the home page loads
- **THEN** a section with eyebrow `"05 · Instalación"` SHALL appear below the commands section
- **AND** a headline `"¿Listo para empezar?"` SHALL be visible
- **AND** an installation command SHALL be displayed in a monospace code block
- **AND** a copy button SHALL be visible next to the command

#### Scenario: Section uses normal background

- **WHEN** CtaSection renders
- **THEN** the outer element SHALL have class `os-section` (without `os-section-alt`)

### Requirement: Copy button copies command to clipboard

The copy button SHALL copy the installation command text to the system clipboard using `navigator.clipboard.writeText()`.

#### Scenario: Successful copy

- **WHEN** user clicks the copy button
- **AND** `navigator.clipboard.writeText()` resolves successfully
- **THEN** the button icon SHALL change to a checkmark (`✓`)
- **AND** the aria-label SHALL change to `"Copiado"`
- **AND** after 2 seconds, the icon and label SHALL reset to original state

#### Scenario: Failed copy

- **WHEN** user clicks the copy button
- **AND** `navigator.clipboard.writeText()` rejects
- **THEN** the button SHALL remain in its original state (no visual change)

### Requirement: CtaSection links to documentation

The section SHALL include a link to external documentation.

#### Scenario: Documentation link renders

- **WHEN** CtaSection renders
- **THEN** a link button labeled `"Ver documentación"` SHALL be visible below the command
- **AND** the link SHALL open in a new tab (`target="_blank"`)
- **AND** the link SHALL have `rel="noopener"` for security

### Requirement: Content comes from ContentService

The component SHALL obtain its data via `ContentService.getCta()` returning a Signal of `CtaData`.

#### Scenario: Data is bound from ContentService

- **WHEN** CtaSection initializes
- **THEN** it SHALL call `ContentService.getCta()`
- **AND** bind eyebrow, title, command, and link to the template

### Requirement: CtaData interface and data structure

The system SHALL define `CtaData` interface and store data in a JSON file.

#### Scenario: Interface exists

- **WHEN** the project compiles
- **THEN** `CtaData` SHALL exist with `eyebrow` (string), `title` (string), `command` (string), and `link` (CtaLink)

#### Scenario: CtaLink interface exists

- **WHEN** the project compiles
- **THEN** `CtaLink` SHALL exist with `label` (string) and `href` (string)

#### Scenario: JSON data file contains correct structure

- **WHEN** the JSON file at `data/cta.json` is loaded
- **THEN** it SHALL contain `eyebrow`, `title`, `command`, and `link` fields

### Requirement: Clipboard utility function

The system SHALL provide a `copyToClipboard()` utility function.

#### Scenario: Function exists and returns Promise

- **WHEN** `copyToClipboard(text)` is called
- **THEN** it SHALL return a `Promise<boolean>`
- **AND** it SHALL resolve to `true` on success
- **AND** it SHALL resolve to `false` on failure (never reject)

### Requirement: Home page integration

CtaSection SHALL be integrated into the home page layout.

#### Scenario: Section renders in correct position

- **WHEN** the home page renders
- **THEN** `<app-cta-section />` SHALL appear after `<app-commands-section />`
