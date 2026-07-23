## ADDED Requirements

### Requirement: Card component renders icon, title, and description
The system SHALL provide a reusable `<app-card>` component that displays an icon, heading, and paragraph in a contained card layout.

#### Scenario: Card renders with all inputs provided
- **WHEN** `<app-card>` is used with `icon`, `title`, and `description` inputs
- **THEN** the icon SHALL be rendered inside a `div` with class `os-card-icon`
- **AND** the title SHALL be rendered in an `h3` element
- **AND** the description SHALL be rendered in a `p` element

### Requirement: Card receives data via inputs
The component SHALL accept `icon` (string), `title` (string), and `description` (string) as required inputs using the `input()` function.

#### Scenario: Inputs are bound dynamically
- **WHEN** a parent component sets `icon`, `title`, and `description` inputs
- **THEN** the card SHALL reflect the provided values in its rendered output

### Requirement: Card uses `article` element
The root element of the card SHALL be an `<article>` element for semantic HTML.

#### Scenario: Article wrapper
- **WHEN** `<app-card>` renders
- **THEN** the root element SHALL be `<article>` with class `os-card`
