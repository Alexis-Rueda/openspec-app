## 1. Global styles and config

- [ ] 1.1 Copy design tokens from `assets/styles.css` to `src/styles.css` with `.os-` prefix on all selectors
- [ ] 1.2 Reference `src/styles.css` in `angular.json` styles array if not already present
- [ ] 1.3 Update `src/index.html` to set `<html class="theme-dark">` and update `<title>` to "OpenSpec · Flujos de trabajo dirigidos por especificaciones"
- [ ] 1.4 Add `interfaces/nav-link.interface.ts` with `NavLink` interface

## 2. Theme system

- [ ] 2.1 Create `utils/theme.ts` with `WritableSignal<'dark' | 'light'>`, `initTheme()` reading from localStorage, and `toggleTheme()` function
- [ ] 2.2 Apply theme class to `<html>` element on signal change using `effect()`

## 3. Content service and data

- [ ] 3.1 Create `services/content.service.ts` with `@Injectable({ providedIn: 'root' })` and `getNavigation()` method
- [ ] 3.2 Enable `resolveJsonModule` in `tsconfig.json` (if not enabled) and `tsconfig.app.json`
- [ ] 3.3 Create `data/navigation.json` with nav links: "Qué es", "Flujo", "Ventajas", "Comandos", "Ejemplo"

## 4. Shared components

- [ ] 4.1 Create `components/shared/header/` with import of `content-service`, theme signals, responsive hamburger menu using `@if`
- [ ] 4.2 Create `components/shared/footer/` with brand mark, credit line, and "Volver arriba" link

## 5. Layout and routing

- [ ] 5.1 Create `layouts/main-layout/` with `<app-header/>`, `<router-outlet/>`, `<app-footer/>` in template
- [ ] 5.2 Update `app.routes.ts` with redirect `/` → `/home` and route for `home-page`
- [ ] 5.3 Update `app.config.ts` providers as needed
- [ ] 5.4 Create `pages/home/home-page.ts` with placeholder content ("Coming soon")
- [ ] 5.5 Update `app.ts` to use layout pattern

## 6. Documentation

- [ ] 6.1 Create `docs/roadmap.md` with sequence of planned changes and what each change covers
- [ ] 6.2 Update `README.md` if needed to reflect new structure
