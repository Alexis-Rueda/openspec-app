## 1. Interfaces y data

- [ ] 1.1 Crear `src/app/interfaces/terminal-line.interface.ts` con TerminalLine { text: string; classes?: string[] }
- [ ] 1.2 Crear `src/app/interfaces/hero-data.interface.ts` con HeroData { pill, title, subtitle, ctaButtons[], stats[], terminalLines[] }
- [ ] 1.3 Crear `src/app/data/hero.json` con contenido completo del hero (textos, CTAs, stats, terminal lines)

## 2. Terminal component

- [ ] 2.1 Crear `src/app/components/shared/terminal/terminal.ts` — Componente standalone con input title (string), input lines (Signal<TerminalLine[]>)
- [ ] 2.2 Template del terminal: barra macOS con 3 dots + título + pre/code body, líneas renderizadas con span de syntax highlighting por clase CSS
- [ ] 2.3 Estilos encapsulados en `terminal.css`: fondo oscuro, borde, border-radius, padding para la ventana; clases .c-prompt, .c-ok, .c-muted, .c-tag dentro del componente

## 3. Hero section component

- [ ] 3.1 Crear `src/app/components/section/hero-section/hero.ts` — Componente standalone que usa ContentService.getHero() y renderiza la sección
- [ ] 3.2 Template: grid con pill badge (izquierda), headline h1, subtitle p, div.cta con botones primary + ghost, dl.stats con dt/dd, app-terminal integrado (derecha)
- [ ] 3.3 Estilos encapsulados en `hero.css`: layout del grid (2 columnas desktop / stack mobile), estilos de pill badge, headline h1, subtitle p, cta buttons (primary/ghost), stats grid 3 columnas

## 4. Content service update

- [ ] 4.1 Agregar método getHero(): Signal<HeroData> en content.service.ts que devuelve hero.json via señal

## 5. Integration con home-page

- [ ] 5.1 Importar dinámicamente HeroSection con loadComponent en home-page (no static)
- [ ] 5.2 Template de home-page incluye app-hero-section en lugar del placeholder "Coming soon"
