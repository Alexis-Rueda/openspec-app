## ADDED Requirements

### Requirement: Section renders command list from static data
The system SHALL display a list of commands loaded from `commands.json` via `ContentService.getCommands()`.

#### Scenario: Initial render shows all commands
- **WHEN** the home page loads and the commands section is visible
- **THEN** the section displays all 14 commands from the data file

#### Scenario: Each command shows code, description, and type badge
- **WHEN** a command item is rendered
- **THEN** it shows the command text (`.os-cmd-code`), description (`.os-cmd-desc`), and a type badge (`.os-cmd-badge`) with label "terminal" for CLI commands and "chat" for chat commands

### Requirement: Section header displays eyebrow, title, and lead text
The system SHALL render a section head with eyebrow "04 · Comandos", a title, and a lead paragraph.

#### Scenario: Section head is visible
- **WHEN** the commands section renders
- **THEN** it shows the eyebrow text, title "Comandos útiles", and lead description text

### Requirement: Responsive grid layout
The system SHALL display commands in a 3-column grid on desktop and a single column on mobile (viewport ≤ 620px).

#### Scenario: Desktop layout
- **WHEN** viewport width is greater than 620px
- **THEN** each command row shows code, description, and badge in a 3-column grid

#### Scenario: Mobile layout
- **WHEN** viewport width is 620px or less
- **THEN** each command row stacks vertically with the badge left-aligned

### Requirement: Section is accessible via anchor link
The section element SHALL have `id="comandos"` to support anchor navigation from the hero CTA.

#### Scenario: Hero CTA links to commands section
- **WHEN** user clicks "Comandos útiles" button in the hero section
- **THEN** the page scrolls to the commands section
