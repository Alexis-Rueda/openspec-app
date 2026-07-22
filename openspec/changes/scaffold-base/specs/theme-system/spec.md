## ADDED Requirements

### Requirement: Theme state is managed by a global signal
The system SHALL provide a global `WritableSignal<'dark' | 'light'>` in `utils/theme.ts` for theme state management.

#### Scenario: Theme signal defaults to dark
- **WHEN** the application loads and no theme is stored in localStorage
- **THEN** the theme signal SHALL have value `'dark'`

### Requirement: Theme persists in localStorage
The system SHALL read the saved theme from localStorage on initialization and write to localStorage on each change.

#### Scenario: Theme persists across reloads
- **WHEN** user toggles theme to `'light'` and reloads the page
- **THEN** the theme signal SHALL initialize to `'light'`

### Requirement: Theme applies CSS class to document element
The system SHALL add `theme-dark` or `theme-light` class to `<html>` element and update `<meta name="theme-color">` content.

#### Scenario: CSS class updates on toggle
- **WHEN** theme signal changes from `'dark'` to `'light'`
- **THEN** `<html>` class SHALL change from `theme-dark` to `theme-light`
- **AND** `<meta name="theme-color">` SHALL update to `#f6f8fa`
