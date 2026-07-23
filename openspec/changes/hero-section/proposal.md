## Why

El hero section es la primera impresión de la guía interactiva de OpenSpec. Necesita comunicar el valor principal del proyecto con un título impactante, subtítulo descriptivo, CTAs claros y una terminal interactiva mostrando comandos reales. El placeholder actual "Coming soon" no transmite información alguna.

## What Changes

- Crear `hero-section` — componente section-level con pill badge, headline, subtítulo, botones CTA y grid de estadísticas
- Crear `terminal` — componente compartible macOS-style que renderiza output de CLI con syntax highlighting basándose en datos estructurados
- Agregar `hero.json` — contenido estático (textos, CTAs, stats, lines del terminal)
- Agregar interfaces `HeroData` y `TerminalLine`
- Extender `ContentService` con método `getHero()`
- Integrar `HeroSection` en `home-page` reemplazando el placeholder

## Capabilities

### Nuevas Capacidades
- `hero-section`: Hero section — pill, headline, subtitle, CTA buttons, stats grid, terminal integrado
- `terminal-reuse`: Componente Terminal reutilizable — barra macOS, body con syntax highlighting desde datos estructurados

## Impact

- `src/app/pages/home/home-page.ts` — integra HeroSection en lugar del placeholder
- `src/app/services/content.service.ts` — añade método getHero()
- `src/styles.css` — sin cambios (estilos encapsulados en componentes)
- Nuevos archivos: 5 componentes/interfaces/data
