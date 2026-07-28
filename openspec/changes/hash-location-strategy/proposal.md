## Why

GitHub Pages returns 404 when refreshing on any route (e.g., /home, /example). GitHub Pages is a static file server — it expects physical files for every URL path. Angular SPAs use client-side routing, so there's no physical file for /home. Switching to HashLocationStrategy moves routing into the URL fragment (/#/home), which never reaches the server, eliminating the 404 issue.

## What Changes

- Add withHashLocation() to provideRouter() in pp.config.ts
- URLs change from /openspec-app/home to openspec-app/#/home

## Capabilities

### New Capabilities

- spa-routing: Client-side routing configuration using hash-based URL strategy

### Modified Capabilities

(none)

## Impact

- src/app/app.config.ts — add withHashLocation() import and provider
- All internal Angular routes continue to work unchanged
- URL structure changes: hash fragment added (/#/)
- External links or bookmarks to old URL format will break (acceptable for new app)
