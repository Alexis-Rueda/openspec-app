## MODIFIED Requirements

### Requirement: CTA buttons are functional
Ambos botones CTA deben estar presentes con estilos diferenciados. Los botones SHALL usar `scrollToSection()` con `event.preventDefault()` para evitar la recarga de página. El `Router` se inyecta en `HeroSection` para detectar la ruta actual. Si el usuario está en `/example`, SHALL navegar a `/home` primero con `router.navigate(['/home'])` y luego hacer scroll con `setTimeout`.

#### Scenario: Primary CTA button is accent styled
- **WHEN** el usuario ve los CTAs del hero
- **THEN** el botón "Ver el flujo" tiene estilo de acento (fondo verde, texto blanco)
- **AND** el botón "Comandos útiles" tiene estilo ghost (fondo transparente, borde)

#### Scenario: CTA buttons scroll to section on home page
- **WHEN** el usuario está en `/home` y hace clic en "Ver el flujo"
- **THEN** la página hace scroll suave a la sección con `id="flujo"`
- **AND** no se recarga la página

#### Scenario: CTA buttons navigate then scroll from other pages
- **WHEN** el usuario está en `/example` y hace clic en "Ver el flujo"
- **THEN** el sistema navega a `/home` usando `router.navigate(['/home'])`
- **AND** después de la navegación (con `setTimeout` de 100ms), hace scroll suave a la sección `#flujo`

#### Scenario: CTA buttons use scrollToSection method
- **WHEN** el usuario hace clic en cualquier botón CTA del hero
- **THEN** se ejecuta `scrollToSection($event, btn.href)` que llama a `event.preventDefault()`
- **AND** si la ruta actual es `/home` o `/`, hace scroll directo con `scrollIntoView({ behavior: 'smooth' })`
- **AND** si la ruta actual es otra, navega a `/home` primero con `router.navigate`
