## Context

La app es una guía interactiva de OpenSpec construida con Angular v22+. Ya existen 6 secciones en home-page (hero, concept, flow, pros-cons, commands, cta), cada una con su componente section, datos JSON, y un interface. El `Terminal` component es reutilizable y soporta líneas con estilos (prompt, ok, muted, path, tag). El `ContentService` sigue un patrón consistente: cada getter retorna `signal(data)` con un import JSON estático.

El roadmap del proyecto (paso 7) especifica crear una página de ejemplo que muestre el flujo de trabajo OpenSpec de forma interactivo.

## Goals / Non-Goals

**Goals:**
- Crear una página `/example` lazy-loaded que muestre el flujo OpenSpec como stepper horizontal interactivo
- Cada paso del stepper muestra un terminal con el comando y su salida simulada
- El usuario puede navegar entre pasos clickeando en el stepper o usando botones prev/next
- Seguir los patrones existentes de la app (interfaces, ContentService, estilos CSS con prefijo `.os-`)
- La página es standalone y no se modifica home-page

**Non-Goals:**
- No se modifica home-page (la página es standalone)
- No se agrega animación compleja de transición entre pasos
- No se agrega lógica de "completar" pasos (solo navegación visual)
- No se integra con código real de OpenSpec (solo contenido estático de ejemplo)
- No se agrega soporte para mobile-first (será responsive pero desktop优先)

## Decisions

### 1. Stepper horizontal con contenido dinámico

**Decisión**: Usar un stepper horizontal clickeable que muestra el paso activo, con el terminal actualizándose al seleccionar un paso.

**Alternativas consideradas**:
- Scroll vertical con cada paso como sección -> Rechazado: el stepper horizontal da mejor overview del flujo completo y es más interactivo
- Botones prev/next solamente -> Rechazado: el stepper permite saltar a cualquier paso directamente

**Razón**: El stepper horizontal es el patrón más intuitivo para flujos secuenciales donde el usuario quiere ver progreso y tener acceso directo a cualquier paso.

### 2. Stepper como parte del page component

**Decisión**: El stepper y el terminal vivirán juntos en `example-page.ts` como un componente autocontenido, no como un `example-section` separado.

**Alternativas consideradas**:
- Crear `example-section` separado y usarlo en la page -> Rechazado: el stepper + terminal es el layout completo de la página, no una sección reutilizable
- Inline template en page -> Rechazado: template >3 líneas, va en archivo separado

**Razón**: A diferencia de las secciones de home (hero, concept, etc.) que son componentes reutilizables, la example-page es una vista completa con layout propio. No tiene sentido separar el stepper en un componente section.

### 3. Contenido estático de ejemplo genérico

**Decisión**: Los 5 pasos muestran un ejemplo genérico de OpenSpec (agregar autenticación), no de esta app específicamente.

**Alternativas consideradas**:
- Ejemplo de esta app (cómo se construyó esta guía) -> Rechazado: demasiado meta, confunde al usuario nuevo
- Ejemplo vacío/solo comandos -> Rechazado: sin contexto el ejemplo no es útil

**Razón**: Un ejemplo genérico pero concreto ("agregar sistema de autenticación") es más fácil de entender para usuarios nuevos que están aprendiendo OpenSpec.

### 4. Datos en JSON estático via ContentService

**Decisión**: Los datos de los 5 pasos se almacenan en `example.json` y se sirven via `ContentService.getExample()`, siguiendo el patrón existente.

**Alternativas consideradas**:
- Datos hardcodeados en el componente -> Rechazado: inconsistente con el patrón de la app
- Servicio independiente -> Rechazado: innecesario para datos estáticos

**Razón**: Consistencia con el resto de la app. Fácil de mantener y actualizar.

## Risks / Trade-offs

- **[Riesgo]** El stepper puede no ser accesible en pantallas pequeñas -> **Mitigación**: responsive design con scroll horizontal en mobile via `overflow-x: auto`
- **[Trade-off]** Contenido estático vs dinámico -> Aceptado: por ahora el contenido es ejemplo, se puede hacer dinámico en el futuro
- **[Riesgo]** Navegación desde home page (link "Ejemplo" en navbar) -> **Mitigación**: actualizar `navigation.json` para apuntar a `/example`
