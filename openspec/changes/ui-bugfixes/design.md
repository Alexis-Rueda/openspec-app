## Context

La app Angular tiene un layout compartido (`MainLayout`) con header, router-outlet y footer. El header contiene links de navegación que apuntan a secciones hash (`#flujo`, `#comandos`) y rutas (`/example`). El hero section también tiene botones CTA con links hash. El sistema de temas usa signals de Angular con un effect para aplicar la clase CSS al `<html>`.

**Estado actual (post-fix):**
- `app.ts`: `effect()` en constructor con injection context, lectura sincrónica de `sessionStorage`
- `utils/theme.ts`: `applyThemeEffect()` eliminado, solo quedan `theme`, `toggleTheme`
- `hero.ts`: `Router` inyectado, `scrollToSection()` con detección de ruta
- `header.ts`: `Router` + `toSignal` para detección reactiva de ruta, `isHomeRoute` computed
- `header.html`: Renderizado condicional, "Inicio" primero en example page

## Goals / Non-Goals

**Goals:**
- Que el toggle de tema funcione al hacer clic
- Que la preferencia de tema persista por sesión (`sessionStorage`)
- Que los botones del hero hagan scroll suave sin recargar
- Que la navegación funcione desde la página de example
- Que el header reaccione a cambios de ruta sin recarga

**Non-Goals:**
- Cambiar la estructura de navegación
- Agregar nuevas páginas
- Persistir tema entre sesiones (solo por sesión)

## Decisions

### 1. Theme toggle: effect en constructor + sessionStorage

**Problema:** `applyThemeEffect()` crea un `effect()` fuera del injection context. Además, `initTheme()` en `afterNextRender` se ejecuta después del effect, sobreescribiendo el valor guardado.

**Decisión:** Mover `effect()` al constructor (injection context válido). Leer `sessionStorage` sincrónicamente en el constructor antes del effect para inicializar el signal con el valor guardado. Usar `sessionStorage` en lugar de `localStorage` para persistencia por sesión.

```
// app.ts
constructor() {
  const saved = sessionStorage.getItem('os-theme');
  if (saved === 'light' || saved === 'dark') {
    theme.set(saved);                    // ← Signal con valor correcto ANTES del effect
  }
  effect(() => {
    const current = theme();
    document.documentElement.className = `theme-${current}`;
    ...
    sessionStorage.setItem('os-theme', current);
  });
}
```

**Alternativa descartada:** `afterNextRender` para el effect — corre fuera de injection context. Flag `initialized` para saltear el primer write — no resuelve el timing porque `initTheme()` era async.

### 2. Hero buttons: Inyectar Router + scrollToSection

**Problema:** Los `<a>` ejecutan la acción por defecto del navegador.

**Decisión:** Inyectar `Router` en `HeroSection` y agregar método `scrollToSection()` con detección de ruta. Usar `router.navigate(['/home'])` + `setTimeout(100ms)` para scroll post-navegación.

```
// hero.ts
private router = inject(Router);

scrollToSection(event: Event, href: string): void {
  event.preventDefault();
  const id = href.replace('#', '');
  if (this.router.url === '/home' || this.router.url === '/') {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  } else {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
}
```

### 3. Header navigation: Detección reactiva de ruta

**Problema:** `router.url` no es un signal, así que `isHomeRoute` no se re-evalúa al navegar. El nav se quedaba estático hasta recargar.

**Decisión:** Usar `toSignal()` de `@angular/core/rxjs-interop` con `Router.events` filtrado a `NavigationEnd` para crear un signal reactivo de la URL actual. Renderizar condicionalmente:
- En `/home` o `/`: mostrar todos los links (hash + ruta)
- En `/example`: "Inicio" primero, luego links de ruta (sin hash)

```
// header.ts
private readonly currentUrl = toSignal(
  this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((e) => e.urlAfterRedirects || e.url),
  ),
  { initialValue: this.router.url },
);
protected readonly isHomeRoute = computed(() => {
  const url = this.currentUrl();
  return url === '/' || url === '/home';
});
```

```
// header.html - Desktop nav
@if (!isHomeRoute()) {
  <a routerLink="/home">Inicio</a>
}
@for (link of navLinks(); track link.href) {
  @if (isHomeRoute() && link.href.startsWith('#')) {
    <a [href]="link.href" (click)="scrollToSection($event, link.href)">{{ link.label }}</a>
  } @else if (!link.href.startsWith('#')) {
    <a [routerLink]="link.href">{{ link.label }}</a>
  }
}
```

## Risks / Trade-offs

- **[Timing del scroll]** → Al navegar de `/example` a `/home`, el DOM puede no estar listo. Mitigación: usar `setTimeout` de 100ms.
- **[sessionStorage vs localStorage]** → La preferencia se pierde al cerrar el navegador. Es el comportamiento solicitado.
- **[Efecto en constructor]** → El effect accede a `document`, que no existe en SSR. En Angular 22 con SSR, el effect no se dispara durante la hidratación porque el signal no cambia en el servidor.
