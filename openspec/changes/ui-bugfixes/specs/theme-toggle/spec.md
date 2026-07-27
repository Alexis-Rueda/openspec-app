## ADDED Requirements

### Requirement: Theme toggle SHALL update document class when clicked
The system SHALL toggle between dark and light themes when the user clicks the theme button. The `toggleTheme()` function SHALL update the signal, and the `effect()` in `applyThemeEffect()` SHALL react to the signal change and update `document.documentElement.className` to `theme-dark` or `theme-light`.

#### Scenario: User clicks theme toggle button
- **WHEN** user clicks the theme toggle button in the header
- **THEN** the `theme` signal updates from 'dark' to 'light' (or vice versa)
- **AND** the `document.documentElement.className` changes to `theme-light` or `theme-dark`
- **AND** the CSS variables update to reflect the new theme colors

#### Scenario: Theme persists across page reload
- **WHEN** user toggles the theme and reloads the page
- **THEN** the page loads with the previously selected theme
- **AND** `localStorage` contains the saved theme preference

#### Scenario: Effect is created in valid injection context
- **WHEN** the App component initializes
- **THEN** the `effect()` for theme is created inside the constructor (injection context)
- **AND** the effect properly tracks the `theme()` signal dependency
