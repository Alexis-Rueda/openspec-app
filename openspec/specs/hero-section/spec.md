## Purpose

HeroSection component for the landing page. Communicates OpenSpec value proposition, displays CTA buttons, stats grid, and integrated terminal preview.

## Requirements

### Requirement: Hero section displays structured content
La página home debe renderizar un hero-section con pill badge, headline principal, subtítulo descriptivo, botones CTA y grid de estadísticas.

#### Scenario: HeroSection renders with correct content
- **WHEN** el componente HeroSection se inicializa
- **THEN** se muestra el pill "Spec-Driven Development" arriba del headline
- **AND** el headline dice "Alinea a tu equipo y a la IA con especificaciones antes de escribir código"
- **AND** el subtítulo describe OpenSpec como herramienta de especificaciones revisables

### Requirement: CTA buttons are functional
Ambos botones CTA deben estar presentes con estilos diferenciados.

#### Scenario: Primary CTA button is accent styled
- **WHEN** el usuario ve los CTAs del hero
- **THEN** el botón "Ver el flujo" tiene estilo de acento (fondo verde, texto blanco)
- **AND** el botón "Comandos útiles" tiene estilo ghost (fondo transparente, borde)

#### Scenario: CTA buttons link correct anchors
- **WHEN** el usuario hace clic en los CTA buttons
- **THEN** "Ver el flujo" navega a "#flujo"
- **AND** "Comandos útiles" navega a "#comandos"

### Requirement: Stats grid displays three items
El hero debe mostrar 3 estadísticas en formato dt/dd debajo de los CTAs.

#### Scenario: Stats grid renders correctly
- **WHEN** el HeroSection se renderiza
- **THEN** muestra "4 fases" con descripción "propose → apply → sync → archive"
- **AND** muestra "2 superficies" con descripción "CLI + comandos en el chat IA"
- **AND** muestra "1 fuente de verdad" con descripción "la carpeta openspec/"

### Requirement: Terminal is integrated in hero-grid
El terminal se debe integrar dentro del grid del hero, alineado a la derecha.

#### Scenario: Terminal appears on right side of hero grid
- **WHEN** el usuario ve el hero en desktop (≥ 901px)
- **THEN** el grid tiene 2 columnas con texto izquierda y terminal derecha
- **AND** las columnas se apilan verticalmente en mobile (< 901px)

### Requirement: Hero section uses encapsulated styling
El hero-section debe incluir todos sus estilos de forma encapsulada.

#### Scenario: Styles are scoped to component
- **WHEN** el componente está montado
- **AND** los tokens CSS globales (.os-) están disponibles como variables
- **THEN** el componente no usa clases globales externas a su scope

## REMOVED Requirements

### Requirement: Hero section is placeholder
El texto "Coming soon" actual debe ser reemplazado completamente.
