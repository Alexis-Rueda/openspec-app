## Purpose

FlowSection component for the landing page. Displays "El flujo de trabajo" with eyebrow label, headline, lead paragraph, and a grid of 4 workflow steps (propose → apply → sync → archive) using numbered badges and arrow connectors between steps.

## Requirements

### Requirement: Workflow section displays "El flujo de trabajo"

The system SHALL render a full-width section with eyebrow label, headline, lead paragraph, and a grid of 4 workflow steps.

#### Scenario: Section renders with correct structure

- **WHEN** the home page loads
- **THEN** a section with eyebrow `"02 · Workflow"` SHALL appear below the concept section
- **AND** a headline `"El flujo de trabajo"` SHALL be visible
- **AND** a lead paragraph describing the 4-phase workflow SHALL be visible
- **AND** a grid of 4 cards with numbered badges SHALL be rendered below the lead

#### Scenario: Section uses alternating background

- **WHEN** FlowSection renders
- **THEN** the outer element SHALL have class `os-section os-section-alt`

### Requirement: Content comes from ContentService

The component SHALL obtain its data via `ContentService.getWorkflowSteps()` returning a Signal of `WorkflowData`.

#### Scenario: Data is bound from ContentService

- **WHEN** FlowSection initializes
- **THEN** it SHALL call `ContentService.getWorkflowSteps()`
- **AND** bind eyebrow, title, lead, and steps array to the template

### Requirement: WorkflowStep interface and data structure

The system SHALL define `WorkflowStep` and `WorkflowData` interfaces and store data in a JSON file.

#### Scenario: Interfaces exist

- **WHEN** the project compiles
- **THEN** `WorkflowStep` SHALL exist with `command` (string), `title` (string), and `description` (string)
- **AND** `WorkflowData` SHALL exist with `eyebrow` (string), `title` (string), `lead` (string), and `steps` (WorkflowStep[])

#### Scenario: JSON data file contains 4 steps

- **WHEN** the JSON file at `data/workflow-steps.json` is loaded
- **THEN** it SHALL contain exactly 4 steps
- **AND** each step SHALL have `command`, `title`, and `description` fields
- **AND** the steps SHALL be in order: propose, apply, sync, archive

### Requirement: Four numbered cards in responsive grid

The 4 cards SHALL display in a 4-column grid on desktop (>900px) and stack vertically on mobile.

#### Scenario: Desktop displays 4 columns with arrows

- **WHEN** viewport width is above 900px
- **THEN** the card grid SHALL display 4 cards in a single row with equal column widths
- **AND** each card (except the last) SHALL show an arrow `→` positioned between cards

#### Scenario: Mobile stacks cards with down arrows

- **WHEN** viewport width is 900px or below
- **THEN** the card grid SHALL stack cards vertically, one per row
- **AND** each card (except the last) SHALL show a down arrow `↓` below the card

#### Scenario: Cards display numbered badge, command, and description

- **WHEN** a workflow step card renders
- **THEN** a numbered badge (1-4) SHALL appear at the top of the card
- **AND** the command SHALL be rendered in a `<code>` element
- **AND** the description SHALL be rendered in a `p` element

### Requirement: Cards have hover effect

Each card SHALL have the same hover effect as concept-section cards.

#### Scenario: Card hover lifts and highlights border

- **WHEN** a user hovers over a workflow step card
- **THEN** the card SHALL translate up by 4px
- **AND** the border color SHALL change to accent color
