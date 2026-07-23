## Architec

- HeroSection está en `src/app/components/section/hero-section/`
- Terminal está en `src/app/components/shared/terminal/`
- HeroSection es standalone, lazy-loaded (import dinámico desde home-page)
- Terminal es standalone con input() para líneas y data
- Ambos usan estilos encapsulados via @Component.styles

## Component: hero-section

### Input/Output
No inputs externos — data viene desde ContentService.getHero(). No outputs.

### Estructura
```
hero-section/
├── hero-section.ts    (componente standalone)
└── hero-section.css   (estilos encapsulados)
```

### Layout
Grid 2 columnas: lado izquierdo (pill, headline, subtitle, CTAs, stats), lado derecho (terminal). Responsive → stack en mobile.

### Contenido HTML del template
- `span.os-pill` — "Spec-Driven Development" label
- `h1.os-hero-title` — Headline principal
- `p.os-hero-sub` — Subtitle descriptivo
- `div.os-hero-cta` — Contenedor de botones (primary + ghost)
- `dl.os-hero-stats` — Grid 3 columnas con dt/dd por estadística
- `app-terminal` — Terminal integrado

### Datos (extraídos de assets/index.html)
- Headline: "Alinea a tu equipo y a la IA con especificaciones antes de escribir código"
- Subtitle: "OpenSpec convierte una idea en una especificación revisable que guía a asistentes como Claude, Cursor o Copilot. Menos código improvisado, más intención acordada."
- Pill: "Spec-Driven Development"
- CTAs: [{ label: "Ver el flujo", href: "#flujo" }, { label: "Comandos útiles", href: "#comandos" }]
- Stats: [{ dt: "4 fases", dd: "propose → apply → sync → archive" }, { dt: "2 superficies", dd: "CLI + comandos en el chat de IA" }, { dt: "1 fuente de verdad", dd: "la carpeta openspec/" }]
- Terminal lines (4 líneas): install, init, list, status

## Component: terminal

### Input/Output
Inputs: `title` (input() string) — Título de la barra; `lines` (Signal<TerminalLine[]>) — Líneas con text y clases CSS para syntax highlighting.

### Estructura
```
terminal/
├── terminal.ts        (componente standalone)
└── terminal.css       (estilos encapsulados)
```

### HTML del template
- `div.os-terminal` — Contenedor principal
  - `div.os-terminal-bar` — Barra con dots y título
    - 3 spans (dot red, yellow, green)
    - span terminal-title (ngIf para título)
  - `pre.os-terminal-body` > code — Cuerpo con líneas

### Sintaxis de las lines
Cada TerminalLine tiene: { text: string; classes?: string[] }
- text → contenido de la línea
- classes → array de clases CSS de syntax highlight (ej['c-prompt'], 'c-ok'] etc.)
- Líneas se renderizan con innerHtml seguro — texto plano + spans con clases

### Clases de color internas al componente (como variables CSS)
- `.os-terminal .c-prompt` → accent color
- `.os-terminal .c-ok` → accent color  
- `.os-terminal .c-muted` --fg-dim
- `os-terminal .c-path` → 7dd3fc

## Data: hero.json

```json
{
  "pill": "Spec-Driven Development",
  "title": "Alinea a tu equipo y a la IA con especificaciones antes de escribir código",
  "subtitle": "OpenSpec convierte una idea en una especificación revisable que guía a asistentes como Claude, Cursor o Copilot. Menos código improvisado, más intención acordada.",
  "ctaButtons": [
    { "label": "Ver el flujo", "href": "#flujo" },
    { "label": "Comandos útiles", "href": "#comandos" }
  ],
  "stats": [
    { "dt": "4 fases", "dd": "propose → apply → sync → archive" },
    { "dt": "2 superficies", "dd": "CLI + comandos en el chat de IA" },
    { "dt": "1 fuente de verdad", "dd": "la carpeta openspec/" }
  ],
  "terminalLines": [
    { "text": "npm install -g @fission-ai/openspec@latest", "classes": ["c-prompt"] },
    { "text": "openspec init", "classes": ["c-prompt"] },
    { "text": "✔ Creada estructura openspec/", "classes": ["c-ok"] },
    { "text": "✔ Configurado perfil de IA (.claude/, .cursor/)", "classes": ["c-ok"] },
    { "text": "", "classes": [] },
    { "text": "openspec list", "classes": ["c-prompt"] },
    { "text": "# Cambios activos", "classes": ["c-muted"] },
    { "text": "  add-user-auth        borrador", "classes": ["c-tag"] },
    { "text": "  rate-limit-api       en progreso", "classes": ["c-tag"] },
    { "text": "", "classes": [] },
    { "text": "openspec status", "classes": ["c-prompt"] },
    { "text": "● 2 cambios · 5 specs · todo validado", "classes": ["c-ok"] }
  ]
}
```

## Integration

### home-page.ts
- Importa HeroSection dinámicamente con import() en loadComponent
- Template: `<app-hero-section></app-hero-section>` antes de otros contenidos actuales
