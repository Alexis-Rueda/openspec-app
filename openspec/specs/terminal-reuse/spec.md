## Purpose

Reusable Terminal component that renders macOS-style windows with syntax-highlighted code lines. Used across multiple pages including the HeroSection.

## Requirements

### Requirement: Terminal renders macOS-style window
El componente Terminal debe mostrar una ventana con estilo macOS.

#### Scenario: Terminal shows title bar with dots
- **WHEN** se instancia el terminal con title y lines
- **THEN** la barra superior tiene 3 dots (rojo, amarillo, verde)
- **AND** muestra un título opcional (ngIf para mostrarlo solo si hay title)

#### Scenario: Terminal shows code body with monospace font
- **WHEN** el terminal recibe lines como input
- **THEN** el cuerpo usa fuente monoespaciada (`--font-mono`)
- **AND** cada línea ocupa una nueva línea (white-space pre)

### Requirement: Syntax highlighting via CSS classes
Cada línea del terminal tiene clases para syntax highlight.

#### Scenario: Lines with c-prompt class are accent color
- **WHEN** una TerminalLine tiene clase 'c-prompt' en su array de clases
- **THEN** el texto se renderiza con color de acento y font-weight 600

#### Scenario: Lines with c-ok class show success highlight
- **WHEN** una TerminalLine tiene clase 'c-ok' en su array de clases
- **THEN** el texto se renderiza con color del acento normal

#### Scenario: Lines with c-muted show dimmed text
- **WHEN** una TerminalLine tiene clase 'c-muted' en su array de clases
- **THEN** el texto se renderiza con color fg-dim (gris)

#### Scenario: Lines with c-tag show yellow tag
- **WHEN** una TerminalLine tiene clase 'c-tag' en su array de clases
- **THEN** el texto se renderiza con color #fbbf24 (amarillo)

### Requirement: Empty lines are preserved
Las líneas vacías deben mostrarse como líneas en blanco entre grupos de código.

#### Scenario: Empty text line renders as blank line
- **WHEN** un TerminalLine tiene text="" y classes=[]
- **THEN** se renderiza una línea vacía en el terminal manteniendo el spacing (white-space pre)
