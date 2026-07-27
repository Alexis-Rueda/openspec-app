## ADDED Requirements

### Requirement: Theme toggle SHALL update document class when clicked
The system SHALL toggle between dark and light themes when the user clicks the theme button. The `toggleTheme()` function SHALL update the `theme` signal, and an `effect()` in the `App` constructor SHALL react to the signal change and update `document.documentElement.className` to `theme-dark` or `theme-light`.

#### Scenario: User clicks theme toggle button
- **WHEN** user clicks the theme toggle button in the header
- **THEN** the `theme` signal updates from 'dark' to 'light' (or vice versa)
- **AND** the `document.documentElement.className` changes to `theme-light` or `theme-dark`
- **AND** the CSS variables update to reflect the new theme colors

#### Scenario: Theme persists across page reload within session
- **WHEN** user toggles the theme and reloads the page
- **THEN** the page loads with the previously selected theme
- **AND** `sessionStorage` contains the saved theme preference

#### Scenario: Effect is created in valid injection context
- **WHEN** the App component initializes
- **THEN** the `effect()` for theme is created inside the constructor (injection context)
- **AND** the constructor reads `sessionStorage` synchronously to initialize the `theme` signal before the effect runs
- **AND** the effect properly tracks the `theme()` signal dependency

#### Scenario: Theme initialization does not overwrite saved preference
- **WHEN** the App component constructor runs
- **THEN** `sessionStorage.getItem('os-theme')` is read synchronously
- **AND** if a valid value exists ('dark' or 'light'), the `theme` signal is set to that value
- **AND** the effect applies the correct class on first render without overwriting sessionStorage
