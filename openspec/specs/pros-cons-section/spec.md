# ProsConsSection

## Purpose

Interactive pros/cons section displaying ventajas y desventajas with two-column responsive layout.

## Requirements

### Requirement: ProsConsSection renders ventajas y desventajas

The system SHALL render a full-width section with two-column layout: pros (ventajas) and cons (desventajas).

#### Scenario: Section renders with correct structure

- **WHEN** the home page loads
- **THEN** a section with eyebrow `"03 · Balance"` SHALL appear below the flow section
- **AND** a headline `"Ventajas y desventajas"` SHALL be visible
- **AND** a lead paragraph describing the trade-offs SHALL be visible
- **AND** two columns SHALL render side by side: "Ventajas" with green badge and "Desventajas" with red badge

#### Scenario: Section uses alternating background

- **WHEN** ProsConsSection renders
- **THEN** the outer element SHALL have class `os-section os-section-alt`

### Requirement: Content comes from ContentService

The component SHALL obtain its data via `ContentService.getProsCons()` returning a Signal of `ProsConsData`.

#### Scenario: Data is bound from ContentService

- **WHEN** ProsConsSection initializes
- **THEN** it SHALL call `ContentService.getProsCons()`
- **AND** bind eyebrow, title, lead, pros, and cons arrays to the template

### Requirement: ProsConsData interface and data structure

The system SHALL define `ProsConsData` interface and store data in a JSON file.

#### Scenario: Interface exists

- **WHEN** the project compiles
- **THEN** `ProsConsData` SHALL exist with `eyebrow` (string), `title` (string), `lead` (string), `pros` (string[]), and `cons` (string[])

#### Scenario: JSON data file contains 6 pros and 6 cons

- **WHEN** the JSON file at `data/pros-cons.json` is loaded
- **THEN** it SHALL contain exactly 6 items in `pros` array
- **AND** exactly 6 items in `cons` array

### Requirement: Two-column responsive layout

The section SHALL display pros and cons in two columns on desktop and stack vertically on mobile.

#### Scenario: Desktop displays two columns side by side

- **WHEN** viewport width is above 768px
- **THEN** pros and cons SHALL render in two equal-width columns
- **AND** each column SHALL have a heading with colored badge

#### Scenario: Mobile stacks columns vertically

- **WHEN** viewport width is 768px or below
- **THEN** pros and cons SHALL stack vertically, one full-width column per row

### Requirement: List items render with proper styling

Each item in pros/cons lists SHALL render as a styled list item.

#### Scenario: Pros items have green indicator

- **WHEN** a pro item renders
- **THEN** it SHALL appear under the "Ventajas" column with a green `+` badge

#### Scenario: Cons items have red indicator

- **WHEN** a con item renders
- **THEN** it SHALL appear under the "Desventajas" column with a red `−` badge

### Requirement: Home page integration

ProsConsSection SHALL be integrated into the home page layout.

#### Scenario: Section renders in correct position

- **WHEN** the home page renders
- **THEN** `<app-pros-cons-section />` SHALL appear after `<app-flow-section />`
