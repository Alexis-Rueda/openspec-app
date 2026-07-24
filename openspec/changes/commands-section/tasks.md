## 1. Data Layer

- [x] 1.1 Create `src/app/interfaces/command-item.interface.ts` with `CommandItem` and `CommandsData` interfaces
- [x] 1.2 Create `src/app/data/commands.json` with 14 commands (7 cli + 7 chat), eyebrow "04 · Comandos", title, lead
- [x] 1.3 Add `getCommands(): Signal<CommandsData>` method to `ContentService`

## 2. Component

- [x] 2.1 Create `src/app/components/section/commands-section/commands.ts` with component class, `activeFilter` signal, `filteredCommands` computed, `tabs` array, `setFilter()` method
- [x] 2.2 Create `src/app/components/section/commands-section/commands.html` with section head, ARIA tablist, `@for` command list
- [x] 2.3 Create `src/app/components/section/commands-section/commands.css` with `.os-commands` section, `.os-tabs` pills, `.os-cmd` grid (3-col desktop, 1-col mobile ≤620px), `.os-cmd-badge` color variants

## 3. Integration

- [x] 3.1 Add `CommandsSection` to `home.ts` imports array and template (after pros-cons-section)
- [x] 3.2 Verify section anchors correctly with hero CTA `#comandos` link

## 4. Verify

- [x] 4.1 Run `ng build` — no errors
- [x] 4.2 Run `ng serve` — verify UI renders, tabs filter, responsive layout, ARIA attributes
