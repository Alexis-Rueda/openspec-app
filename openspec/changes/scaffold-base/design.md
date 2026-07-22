## Context

App Angular v22 en estado placeholder (scaffolding CLI). Existe landing page estática en `assets/` con diseño completo de guía OpenSpec que servirá como contenido fuente. Se requiere la estructura base de la app Angular para comenzar el desarrollo por secciones. El proyecto sigue metodología OpenSpec (dogfooding).

**Stack**: Angular v22, TypeScript v6, Vitest v4, standalone components (default), signals.

## Goals / Non-Goals

**Goals:**
- Estructura de carpetas explícita: `layouts/`, `pages/`, `components/section/`, `components/shared/`, `services/`, `interfaces/`, `data/`, `utils/`
- Design tokens globales en `src/styles.css` con prefijo `.os-` para evitar colisiones
- `main-layout` funcional con header, router-outlet y footer
- `header` con navegación, theme toggle, menú móvil responsivo
- `footer` simple con créditos
- Sistema de tema oscuro/claro con señal global y persistencia en localStorage
- `content.service` inyectable con método `getNavigation()` tipado
- Ruteo: `/` redirige a `/home`, ruta lazy para `home-page`
- Archivo `docs/roadmap.md` con hoja de ruta de cambios siguientes

**Non-Goals:**
- No incluir ninguna section de contenido (hero, concept, flow, pros-cons, commands, cta)
- No implementar carga de datos reales (solo navigation.json)
- No implementar lazy loading profundo (solo routing básico)
- No migrar el JS interactivo de la landing (tabs, ejemplo paso a paso, copy)

## Decisions

### 1. Prefijo `.os-` para estilos globales
**Decisión**: Todos los selectores globales usan prefijo `.os-` (ej: `.os-header`, `.os-hero`, `.os-btn`, `.os-card`).
**Alternativa considerada**: Usar selectores sin prefijo o con Shadow DOM encapsulado.
**Por qué**: Los selectores originales de la landing (`.container`, `.card`, `.btn`) son genéricos y pueden colisionar con librerías externas o con estilos de componentes. El prefijo `.os-` evita colisiones sin perder la ventaja de estilos globales compartidos.

### 2. Content service con imports JSON estáticos
**Decisión**: `content.service` importa archivos JSON estáticamente usando `resolveJsonModule`. Cada método retorna una `Signal<T>` tipada.
**Alternativa considerada**: Fetch HTTP de archivos JSON, o Spring de datos.
**Por qué**: Los JSONs son parte del bundle, cero latencia de red, type-safe con interfaces, y Angular los optimiza en producción. Como el contenido es estático (no viene de API), no necesita carga asíncrona.

### 3. Métodos tipados individuales en content service
**Decisión**: Cada sección tiene su propio método tipado (`getNavigation(): Signal<NavLink[]>`, futuro `getHero(): Signal<HeroData>`, etc.).
**Alternativa considerada**: Método genérico `get<T>(key: string): Signal<T>`.
**Por qué**: Tipado explícito por método da mejor autocompletado y type safety en el editor. No hay riesgo de errores por keys mal escritas. El overhead de escribir un método por sección es mínimo y se amortiza con la claridad.

### 4. Theme como utilidad con señal global
**Decisión**: `utils/theme.ts` exporta señales y funciones, no un servicio inyectable.
**Alternativa considerada**: Service inyectable con `providedIn: 'root'`.
**Por qué**: El tema es estado global puro, sin dependencias de Angular (no necesita DI). Una señal exportada desde un módulo ES es más simple, testeable y con menos overhead que un servicio. Sigue el principio de mantener state management al mínimo.

### 5. Menú móvil con `@if`
**Decisión**: El menú móvil se renderiza condicionalmente con `@if (isMobileNavOpen)` en el template del header.
**Alternativa considerada**: CSS `display: none/block` con clase toggle.
**Por qué**: `@if` elimina el DOM cuando no está visible, mejorando accesibilidad (no hay elementos ocultos navegables por tab). Sigue las guías de Angular de usar native control flow.

### 6. Main-layout con router-outlet
**Decisión**: El layout renderiza header, luego `<router-outlet/>`, luego footer.
**Alternativa considerada**: Cada página incluye su propio header/footer.
**Por qué**: DRY. El header y footer son consistentes en toda la app. router-outlet permite lazy loading futuro de pages.

## Risks / Trade-offs

| Riesgo | Mitigación |
|--------|-----------|
| Prefijos `.os-` pueden olvidarse en componentes nuevos | documentar en AGENTS.md y en el roadmap |
| `resolveJsonModule` incluye JSONs en el bundle incluso si no se usan | Los JSONs son pequeños (<1KB cada uno). Si crecen, migrar a carga lazy con fetch |
| Tema con señal global no tiene soporte nativo de Angular CDK | Para el MVP es suficiente. Si se necesita CDK en el futuro, migrar es trivial |
| Header y footer en main-layout asumen que todas las páginas usan el mismo layout | Si surge una page sin layout (login, 404), se puede crear otro layout alternativo fácilmente |
