## 1. Theme Toggle Fix

- [ ] 1.1 Move `effect()` from `applyThemeEffect()` to `App` constructor inside `afterNextRender()`
- [ ] 1.2 Remove `applyThemeEffect()` function from `utils/theme.ts`
- [ ] 1.3 Verify theme toggle works: click button → class changes → colors update

## 2. Hero Section Smooth Scroll

- [ ] 2.1 Import and inject `Router` in `HeroSection` component
- [ ] 2.2 Add `scrollToSection(event, href)` method with `preventDefault()` logic
- [ ] 2.3 Update `hero.html` buttons to use `(click)="scrollToSection($event, btn.href)"`
- [ ] 2.4 Handle navigation from non-home pages: navigate to `/home` then scroll

## 3. Header Navigation on Example Page

- [ ] 3.1 Import and inject `Router` in `Header` component
- [ ] 3.2 Add `isHomeRoute()` computed signal to detect current route
- [ ] 3.3 Update `header.html` to conditionally render: hash links only on home, "Inicio" link on other pages
- [ ] 3.4 Update mobile nav with same conditional logic
- [ ] 3.5 Verify navigation works: home shows all links, example shows only "Inicio"

## 4. Verification

- [ ] 4.1 Test theme toggle on home page
- [ ] 4.2 Test hero buttons scroll on home page
- [ ] 4.3 Test hero buttons navigate + scroll from example page
- [ ] 4.4 Test header navigation on home page (all links work)
- [ ] 4.5 Test header navigation on example page (only "Inicio" visible and functional)
- [ ] 4.6 Test mobile navigation on both pages
