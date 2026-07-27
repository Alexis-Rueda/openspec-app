## 1. Navigation Links

- [x] 1.1 Update `navigation.json` to use hash links: `/que-es` → `#que-es`, `/flujo` → `#flujo`, `/ventajas` → `#ventajas`, `/comandos` → `#comandos`
- [x] 1.2 Keep `/example` as router link (external page)

## 2. Section IDs

- [x] 2.1 Add `id="flujo"` to `<section>` in `flow-section/flow.html`
- [x] 2.2 Add `id="que-es"` to `<section>` in `concept-section/concept.html`
- [x] 2.3 Add `id="ventajas"` to `<section>` in `pros-cons-section/pros-cons.html`
- [x] 2.4 Verify `commands-section` already has `id="comandos"` (no change needed)

## 3. Footer

- [x] 3.1 Update footer text in `footer.html` to "Página informativa no oficial. Hecha por Alexis Rueda para el equipo de Evertec México."
- [x] 3.2 Verify "Volver arriba" link still works with `scrollToTop($event)`

## 4. Concept Cards Alignment

- [x] 4.1 Add `align-items: stretch` to `.concept-grid` in `concept.css`
- [x] 4.2 Verify cards have equal height on desktop (>900px viewport)
- [x] 4.3 Verify mobile layout still stacks cards vertically (≤900px viewport)

## 5. Verification

- [x] 5.1 Test all navigation links from header scroll to correct sections
- [x] 5.2 Test hero buttons scroll to `#flujo` and `#comandos`
- [x] 5.3 Test footer attribution text is correct
- [x] 5.4 Test concept cards have equal height on desktop
- [x] 5.5 Test responsive behavior on mobile viewport

## 6. Header Fixes

- [x] 6.1 Add `scrollToSection()` method in `header.ts` for manual smooth scroll on hash links
- [x] 6.2 Add `isScrolled` signal with scroll listener for header visual feedback
- [x] 6.3 Add `.is-scrolled` CSS class in `styles.css` (opaque background + shadow)
- [x] 6.4 Change `<app-header>` `:host` to `display: contents` for sticky positioning
- [x] 6.5 Change `<app-card>` `:host` to `display: flex; flex-direction: column` with `.os-card` `flex: 1` for equal card height