## ADDED Requirements

### Requirement: Main layout wraps all pages
The system SHALL provide a `main-layout` component that wraps every page rendered via `<router-outlet>` with a consistent header and footer.

#### Scenario: Page renders inside main layout
- **WHEN** user navigates to `/home`
- **THEN** the page content renders between the header and footer in the DOM tree

### Requirement: Layout component is standalone
The `main-layout` SHALL be a standalone component (default in Angular v22+), imported directly in routes or via the root component.

#### Scenario: Layout is standalone
- **WHEN** inspecting `main-layout.ts`
- **THEN** the component SHALL NOT have `standalone: true` set (it is the default) and SHALL NOT import any NgModule

### Requirement: Main layout provides router-outlet
The `main-layout` template SHALL include `<router-outlet/>` for rendering routed child pages.

#### Scenario: Router outlet renders between header and footer
- **WHEN** inspecting `main-layout.html`
- **THEN** the `<router-outlet/>` SHALL appear between the `<app-header/>` and `<app-footer/>` elements

### Requirement: Route '/' redirects to '/home'
The root path `/` SHALL redirect to `/home` with `pathMatch: 'full'`.

#### Scenario: Root redirects to home
- **WHEN** user visits `/`
- **THEN** the browser URL SHALL change to `/home` and the home page SHALL render
