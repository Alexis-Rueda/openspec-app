## MODIFIED Requirements

### Requirement: Navigation link points to example page
The system SHALL provide a navigation link to the example page from the header navbar. When the user is on the example page, the header SHALL hide hash links and display only a "Inicio" link to navigate back to the home page.

#### Scenario: Navbar link on home page
- **WHEN** the user views the header navbar on `/home`
- **THEN** the "Ejemplo" link points to `/example`
- **AND** clicking the link navigates to the example page
- **AND** all hash links (#que-es, #flujo, #ventajas, #comandos) are visible

#### Scenario: Navbar adapts on example page
- **WHEN** the user is on `/example`
- **THEN** the header hides all hash links (#que-es, #flujo, #ventajas, #comandos)
- **AND** the header displays only an "Inicio" link pointing to `/home`
- **AND** clicking "Inicio" navigates back to the home page

#### Scenario: Hash links scroll correctly on home page
- **WHEN** the user is on `/home` and clicks a hash link (e.g., "Flujo")
- **THEN** the page scrolls smoothly to the corresponding section
- **AND** the page does not reload

#### Scenario: Mobile nav adapts on example page
- **WHEN** the user is on `/example` and opens the mobile navigation
- **THEN** the mobile nav shows only "Inicio" link
- **AND** clicking "Inicio" navigates to `/home` and closes the mobile nav
