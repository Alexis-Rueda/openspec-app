# commands-filter

## Purpose

Provide tab-based filtering for the commands section to filter by command type.

## Requirements

### Requirement: Tab filters control visible commands
The system SHALL provide three tab buttons (Todos, Terminal, Chat) that filter the command list by type.

#### Scenario: All tab shows all commands
- **WHEN** the "Todos" tab is active
- **THEN** all 14 commands are displayed

#### Scenario: Terminal tab shows only CLI commands
- **WHEN** the "Terminal (openspec)" tab is active
- **THEN** only commands with `type: "cli"` are displayed (7 commands)

#### Scenario: Chat tab shows only chat commands
- **WHEN** the "Chat (/opsx:)" tab is active
- **THEN** only commands with `type: "chat"` are displayed (7 commands)

### Requirement: Active tab is visually indicated
The active tab SHALL have the `.is-active` class applied, rendering with accent background and contrast text.

#### Scenario: Tab visual state updates on click
- **WHEN** user clicks a different tab
- **THEN** the previously active tab loses `.is-active` and the clicked tab gains `.is-active`

### Requirement: Tabs use ARIA tablist pattern
The tab container SHALL use `role="tablist"` with `aria-label="Tipos de comandos"`. Each tab button SHALL use `role="tab"` and `aria-selected` reflecting its active state.

#### Scenario: Screen reader announces tablist
- **WHEN** a screen reader focuses the tab container
- **THEN** it announces "Tipos de comandos" as the label

#### Scenario: aria-selected updates with active tab
- **WHEN** a tab becomes active
- **THEN** its `aria-selected` attribute is `"true"` and all other tabs have `"false"`

### Requirement: Filtering uses Angular signals
The filter state SHALL be managed with a `signal` for the active filter and a `computed` signal for the filtered command list.

#### Scenario: Signal-based reactivity
- **WHEN** the active filter signal changes
- **THEN** the computed signal automatically derives the filtered list and the template re-renders
