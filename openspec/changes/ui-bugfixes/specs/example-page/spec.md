## MODIFIED Requirements

### Requirement: Navigation link points to example page
The system SHALL provide a navigation link to the example page from the header navbar. The header SHALL reactively detect the current route using `toSignal` on `Router.events` filtered to `NavigationEnd`. When the user is on the example page, the header SHALL hide hash links and display "Inicio" first, followed by "Ejemplo".

#### Scenario: Navbar link on home page
- **WHEN** the user views the header navbar on `/home`
- **THEN** all hash links (#que-es, #flujo, #ventajas, #comandos) are visible
- **AND** the "Ejemplo" link points to `/example`
- **AND** clicking the link navigates to the example page

#### Scenario: Navbar adapts on example page
- **WHEN** the user is on `/example`
- **THEN** the header hides all hash links (#que-es, #flujo, #ventajas, #comandos)
- **AND** the header displays "Inicio" link first, then "Ejemplo" link
- **AND** "Inicio" points to `/home` and clicking it navigates back to the home page

#### Scenario: Hash links scroll correctly on home page
- **WHEN** the user is on `/home` and clicks a hash link (e.g., "Flujo")
- **THEN** the page scrolls smoothly to the corresponding section
- **AND** the page does not reload

#### Scenario: Mobile nav adapts on example page
- **WHEN** the user is on `/example` and opens the mobile navigation
- **THEN** the mobile nav shows "Inicio" link first, then other non-hash links
- **AND** clicking "Inicio" navigates to `/home` and closes the mobile nav

#### Scenario: Route detection is reactive
- **WHEN** the user navigates between `/home` and `/example`
- **THEN** the `isHomeRoute` computed signal updates reactively via `toSignal(Router.events)`
- **AND** the nav links re-render without requiring a page reload
