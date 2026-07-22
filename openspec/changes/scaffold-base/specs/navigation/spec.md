## ADDED Requirements

### Requirement: Header shows logo and navigation links
The `header` component SHALL display the OpenSpec brand mark (`</>`), brand name, and navigation links from the content service.

#### Scenario: Header renders with nav links
- **WHEN** the header component renders
- **THEN** the brand mark `</>` SHALL be visible
- **AND** navigation links from `content-service` SHALL be rendered as `<a>` elements

### Requirement: Header has theme toggle button
The header SHALL include a button to toggle between dark and light themes.

#### Scenario: Theme toggle changes theme
- **WHEN** user clicks the theme toggle button
- **THEN** the theme signal SHALL switch from `'dark'` to `'light'` or vice versa

### Requirement: Mobile menu is conditionally rendered
The header SHALL show a hamburger button on small screens. When clicked, a mobile navigation menu SHALL appear using Angular `@if` control flow.

#### Scenario: Mobile menu opens and closes
- **WHEN** viewport width is below 900px and user clicks hamburger button
- **THEN** mobile nav SHALL render in the DOM
- **WHEN** user clicks a link inside mobile nav
- **THEN** mobile nav SHALL be removed from the DOM

### Requirement: Header actions include GitHub link
The header SHALL include a GitHub link button styled as ghost button.

#### Scenario: GitHub link is present
- **WHEN** inspecting the header
- **THEN** a link to `https://github.com/Fission-AI/OpenSpec` SHALL be present with `target="_blank"` and `rel="noopener"`
