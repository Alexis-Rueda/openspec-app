## Context

La app Angular tiene un layout compartido (`MainLayout`) con header, router-outlet y footer. El header contiene links de navegación que apuntan a secciones hash (`#flujo`, `#comandos`) y rutas (`/example`). El hero section también tiene botones CTA con links hash. El sistema de temas usa signals de Angular con un effect para aplicar la clase CSS al `<html>`.

**Estado actual:**
- `app.ts`: `initTheme()` y `applyThemeEffect()` se llaman en `afterNextRender()`
- `hero.html`: Botones son `<a [href]="btn.href">` sin `preventDefault()`
- `header.html`: Links hash usan `scrollToSection()` que hace `preventDefault()`
- `header.ts`: No detecta la ruta actual

## Goals / Non-Goals

**Goals:**
- Que el toggle de tema funcione al hacer clic
- Que los botones del hero hagan scroll suave sin recargar
- Que la navegación funcione desde la página de ejemplo

**Non-Goals:**
- Cambiar la estructura de navegación
- Agregar nuevas páginas
- Modificar el sistema de temas existente

## Decisions

### 1. Theme toggle: Mover effect al constructor

**Problema:** `applyThemeEffect()` crea un `effect()` fuera del injection context.

**Decisión:** Mover el `effect()` al constructor de `App` donde hay injection context válido.

```
// app.ts
constructor() {
  afterNextRender(() => {
    initTheme();
    effect(() => {                    // ← Aquí sí hay injection context
      const current = theme();
      document.documentElement.className = `theme-${current}`;
      ...
    });
  });
}
```

**Alternativa descartada:** Usar `provideZonelessChangeDetection()` — no resuelve el problema de suscripción al signal.

### 2. Hero buttons: Inyectar Router + scrollToSection

**Problema:** Los `<a>` ejecutan la acción por defecto del navegador.

**Decisión:** Inyectar `Router` en `HeroSection` y agregar método `scrollToSection()` similar al header. Usar `router.navigate([''])` + `scrollIntoView()` para navegar a home y hacer scroll.

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

### 3. Header navigation: Detectar ruta actual

**Problema:** Links hash no funcionan en `/example`.

**Decisión:** Inyectar `ActivatedRoute` o `Router` para detectar la ruta. Renderizar condicionalmente:
- Si estamos en `/home` o `/`: mostrar todos los links (hash + ruta)
- Si estamos en `/example`: ocultar links hash, mostrar solo "Inicio" con `routerLink="/home"`

```
// header.html
@for (link of navLinks(); track link.href) {
  @if (isHomeRoute() && link.href.startsWith('#')) {
    <a [href]="link.href" (click)="scrollToSection($event, link.href)">{{ link.label }}</a>
  } @else if (!link.href.startsWith('#')) {
    <a [routerLink]="link.href">{{ link.label }}</a>
  }
}
@if (!isHomeRoute()) {
  <a routerLink="/home">Inicio</a>
}
```

## Risks / Trade-offs

- **[Timing del scroll]** → Al navegar de `/example` a `/home`, el DOM puede no estar listo. Mitigación: usar `setTimeout` de 100ms o `afterNextRender`.
- **[Complejidad del header]** → La lógica de renderizado condicional agrega complejidad. Mitigación: Extraer a un computed signal `visibleLinks` que filtre según la ruta.
