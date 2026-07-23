## Context

El scaffold-base y hero-section están completos. La home-page tiene hero-section importado estáticamente. ContentService expone getNavigation() y getHero(). El siguiente bloque es "¿Qué es OpenSpec?" con 3 cards explicativas. El navigation.json ya incluye "Qué es" → "/que-es".

## Goals / Non-Goals

**Goals:**
- Crear concept-section con eyebrow, headline, lead paragraph y grid de 3 cards
- Crear card como componente compartible reutilizable (selector app-card)
- Extraer contenido a concept.json estático
- Integrar concept-section en home-page debajo de hero-section

**Non-Goals:**
- No implementar lazy-loading de concept-section (es parte de la home-page estática)
- No añadir animaciones de entrada ni interacciones complejas
- No crear ruta independiente para /que-es (a futuro)

## Decisions

### Componente Card reutilizable vs. inline
Card se crea como componente standalone compartible en `components/shared/card/`. Esto permite reuso en commands-section y otras secciones futuras.

### Inputs vs. ContentService en Card
Card recibe data via inputs `icon` (string), `title` (string), `description` (string). Así es puramente presentacional y reutilizable sin depender de ContentService.

### Estructura de concept.json
Sigue el mismo patrón que hero.json: objeto con eyebrow, title, lead, cards[].

### Integración en home-page
ConceptSection se importa estáticamente (mismo patrón que HeroSection). La home-page renderiza ambos componentes secuencialmente.

## Risks / Trade-offs

- [Card muy específico] → Si cards futuras requieren distinto layout, se añade input `variant` o se crea otro componente. Por ahora resuelve el caso concreto.
- [Contenido en JSON vs. inline] → JSON permite cambiar textos sin recompilar. Trade-off: tipado manual via interface.
