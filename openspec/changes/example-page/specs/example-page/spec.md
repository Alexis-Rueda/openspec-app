## ADDED Requirements

### Requirement: Example page displays interactive OpenSpec workflow

The system SHALL provide an example page at `/example` that demonstrates the OpenSpec workflow as an interactive horizontal stepper with terminal previews.

#### Scenario: User navigates to example page

- **WHEN** the user navigates to `/example`
- **THEN** the system displays a page with title "Ejemplo del Flujo OpenSpec"
- **AND** the system displays a horizontal stepper with 5 steps (Explore, Propose, Apply, Sync, Archive)
- **AND** the system displays a terminal showing the content of step 1 (Explore)

#### Scenario: User clicks on a step in the stepper

- **WHEN** the user clicks on step N in the stepper
- **THEN** the system highlights step N as active
- **AND** the system updates the terminal to show step N's command and output
- **AND** the system updates the step description text

#### Scenario: User navigates with next button

- **WHEN** the user clicks the "Siguiente" button
- **THEN** the system advances to the next step
- **AND** the system updates the stepper highlight and terminal content

#### Scenario: User navigates with previous button

- **WHEN** the user clicks the "Anterior" button
- **THEN** the system goes to the previous step
- **AND** the system updates the stepper highlight and terminal content

#### Scenario: First step disables previous button

- **WHEN** the user is on step 1 (Explore)
- **THEN** the system disables the "Anterior" button

#### Scenario: Last step disables next button

- **WHEN** the user is on step 5 (Archive)
- **THEN** the system disables the "Siguiente" button

### Requirement: Each step shows a terminal with command and output

The system SHALL display a terminal component for each step containing the OpenSpec command and its simulated output.

#### Scenario: Step terminal content

- **WHEN** step N is active
- **THEN** the system displays a terminal with the command for step N (e.g., `/opsx:explore auth system`)
- **AND** the terminal shows simulated output lines with appropriate styles (prompt, ok, muted)

### Requirement: Example page is lazy-loaded

The system SHALL lazy-load the example page component when the user navigates to `/example`.

#### Scenario: Route loading

- **WHEN** the user navigates to `/example`
- **THEN** the system loads the example page component lazily
- **AND** the page renders within the main layout (header + footer)

### Requirement: Navigation link points to example page

The system SHALL provide a navigation link to the example page from the header navbar.

#### Scenario: Navbar link

- **WHEN** the user views the header navbar
- **THEN** the "Ejemplo" link points to `/example`
- **AND** clicking the link navigates to the example page
