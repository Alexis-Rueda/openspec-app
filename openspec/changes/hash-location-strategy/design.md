## Context

The app currently uses Angular's default PathLocationStrategy, which produces clean URLs like /home. When deployed to GitHub Pages (a static file server), refreshing any route returns 404 because GitHub Pages expects a physical file at that path.

GitHub Pages is configured via .github/workflows/deploy.yml with --base-href /openspec-app/. The app is served at https://<user>.github.io/openspec-app/.

## Goals / Non-Goals

**Goals:**
- Fix 404 errors on page refresh in GitHub Pages deployment
- Keep Angular routing working with all existing routes (/home, /example)

**Non-Goals:**
- Changing the URL structure beyond the hash fragment
- Implementing a custom server-side solution
- Migrating away from GitHub Pages

## Decisions

### Use withHashLocation() over 404.html redirect hack

**Decision:** Add withHashLocation() to provideRouter().

**Alternatives considered:**
1. 404.html redirect — requires maintaining a separate HTML file with JavaScript redirect logic. Works but is fragile and non-standard.
2. HashLocationStrategy — Angular's built-in solution, zero dependencies, single-line change.

**Rationale:** HashLocationStrategy is the officially supported Angular approach for environments without server-side routing. One-line change, no external scripts, no maintenance burden.

### Modify pp.config.ts only

**Decision:** Single file change in provideRouter().

**Rationale:** The change is minimal and contained. No other files need modification.

## Risks / Trade-offs

- [URLs change format] → Acceptable for new app with no existing bookmarks
- [Hash fragment visible in URL] → Minor aesthetic trade-off, functional behavior identical
