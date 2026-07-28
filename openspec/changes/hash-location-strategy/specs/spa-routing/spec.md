## ADDED Requirements

### Requirement: Hash-based client-side routing
The system SHALL use HashLocationStrategy for all Angular routes, producing URLs with a hash fragment (e.g., /#/home).

#### Scenario: Page refresh on home route
- **WHEN** user navigates to /#/home and refreshes the browser
- **THEN** the app loads correctly and displays the home page

#### Scenario: Page refresh on example route
- **WHEN** user navigates to /#/example and refreshes the browser
- **THEN** the app loads correctly and displays the example page

#### Scenario: Direct URL access
- **WHEN** user opens the full URL with hash fragment directly
- **THEN** the app loads and displays the correct page without 404

### Requirement: Existing routes remain functional
All existing routes SHALL continue to work with hash-based URLs.

#### Scenario: Navigation between routes
- **WHEN** user is on /#/home and clicks a link to example
- **THEN** URL changes to /#/example and the example page renders

#### Scenario: Wildcard redirect
- **WHEN** user navigates to /#/unknown
- **THEN** the app redirects to /#/home
