## 1. Fix ProsCons Background

- [ ] 1.1 Change `os-section os-section-alt` to `os-section` in `pros-cons-section/pros-cons.html`

## 2. Data Layer

- [ ] 2.1 Create `src/app/interfaces/cta-data.interface.ts` with `CtaLink` and `CtaData` interfaces
- [ ] 2.2 Create `src/app/data/cta.json` with eyebrow, title, command, and link
- [ ] 2.3 Add `getCta(): Signal<CtaData>` method to `ContentService`

## 3. Clipboard Utility

- [ ] 3.1 Create `src/app/utils/clipboard.ts` with `copyToClipboard()` function using `navigator.clipboard.writeText()`

## 4. Component

- [ ] 4.1 Create `src/app/components/section/cta-section/cta.ts` with component class, `copied` signal, `copyCommand()` method
- [ ] 4.2 Create `src/app/components/section/cta-section/cta.html` with section head, install command, copy button, doc link
- [ ] 4.3 Create `src/app/components/section/cta-section/cta.css` with centered layout, command box, copy button, responsive styles

## 5. Integration

- [ ] 5.1 Add `CtaSection` to `home-page.ts` imports array and template (after commands-section)

## 6. Verify

- [ ] 6.1 Run `ng build` — no errors
- [ ] 6.2 Run `ng serve` — verify CTA renders, copy button works, pros-cons background is normal
