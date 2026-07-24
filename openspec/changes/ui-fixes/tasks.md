## 1. Navigation Links

- [ ] 1.1 Update `navigation.json` to use hash links: `/que-es` → `#que-es`, `/flujo` → `#flujo`, `/ventajas` → `#ventajas`, `/comandos` → `#comandos`
- [ ] 1.2 Keep `/example` as router link (external page)

## 2. Section IDs

- [ ] 2.1 Add `id="flujo"` to `<section>` in `flow-section/flow.html`
- [ ] 2.2 Add `id="que-es"` to `<section>` in `concept-section/concept.html`
- [ ] 2.3 Add `id="ventajas"` to `<section>` in `pros-cons-section/pros-cons.html`
- [ ] 2.4 Verify `commands-section` already has `id="comandos"` (no change needed)

## 3. Footer

- [ ] 3.1 Update footer text in `footer.html` to "Página informativa no oficial. Hecha por Alexis Rueda para el equipo de Evertec México."
- [ ] 3.2 Verify "Volver arriba" link still works with `scrollToTop($event)`

## 4. Concept Cards Alignment

- [ ] 4.1 Add `align-items: stretch` to `.concept-grid` in `concept.css`
- [ ] 4.2 Verify cards have equal height on desktop (>900px viewport)
- [ ] 4.3 Verify mobile layout still stacks cards vertically (≤900px viewport)

## 5. Verification

- [ ] 5.1 Test all navigation links from header scroll to correct sections
- [ ] 5.2 Test hero buttons scroll to `#flujo` and `#comandos`
- [ ] 5.3 Test footer attribution text is correct
- [ ] 5.4 Test concept cards have equal height on desktop
- [ ] 5.5 Test responsive behavior on mobile viewport