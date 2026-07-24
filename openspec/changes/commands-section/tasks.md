## 1. Data Layer

- [ ] 1.1 Create `src/app/interfaces/command-item.interface.ts` with `CommandItem` and `CommandsData` interfaces
- [ ] 1.2 Create `src/app/data/commands.json` with 14 commands (7 cli + 7 chat), eyebrow "04 · Comandos", title, lead
- [ ] 1.3 Add `getCommands(): Signal<CommandsData>` method to `ContentService`

## 2. Component

- [ ] 2.1 Create `src/app/components/section/commands-section/commands.ts` with component class, `activeFilter` signal, `filteredCommands` computed, `tabs` array, `setFilter()` method
- [ ] 2.2 Create `src/app/components/section/commands-section/commands.html` with section head, ARIA tablist, `@for` command list
- [ ] 2.3 Create `src/app/components/section/commands-section/commands.css` with `.os-commands` section, `.os-tabs` pills, `.os-cmd` grid (3-col desktop, 1-col mobile ≤620px), `.os-cmd-badge` color variants

## 3. Integration

- [ ] 3.1 Add `CommandsSection` to `home.ts` imports array and template (after pros-cons-section)
- [ ] 3.2 Verify section anchors correctly with hero CTA `#comandos` link

## 4. Verify

- [ ] 4.1 Run `ng build` — no errors
- [ ] 4.2 Run `ng serve` — verify UI renders, tabs filter, responsive layout, ARIA attributes
