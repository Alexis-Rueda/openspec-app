## ADDED Requirements

### Requirement: Content service provides typed navigation data
The `content.service` SHALL provide a `getNavigation()` method that returns `Signal<NavLink[]>` from a static JSON import.

#### Scenario: getNavigation returns nav links
- **WHEN** `getNavigation()` is called
- **THEN** it SHALL return a signal containing an array of `NavLink` objects with `label`, `href`, and optional `target` fields

### Requirement: NavLink interface defines link shape
The system SHALL define an exported `NavLink` interface in `interfaces/nav-link.interface.ts`.

#### Scenario: NavLink has required fields
- **WHEN** inspecting `NavLink` interface
- **THEN** it SHALL have at least `label: string` and `href: string` properties
- **AND** it SHALL have an optional `target?: string` property

### Requirement: Content service is tree-shakeable
The `content.service` SHALL use `@Injectable({ providedIn: 'root' })` for tree-shakeable registration.

#### Scenario: No manual provider registration
- **WHEN** inspecting the application providers
- **THEN** `content.service` SHALL NOT appear in any providers array

### Requirement: JSON imports use resolveJsonModule
Navigation data SHALL be imported from `src/app/data/navigation.json` using TypeScript's `resolveJsonModule`.

#### Scenario: JSON import compiles
- **WHEN** the project builds
- **THEN** the JSON file SHALL be compiled into the bundle without errors
