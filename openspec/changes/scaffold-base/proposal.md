## Why

OpenSpec-app es una guía interactiva de OpenSpec construida con el propio flujo OpenSpec (dogfooding). Actualmente existe una landing page estática en `assets/` que sirve como contenido fuente, pero la app Angular está en estado placeholder (template de Angular CLI). Se necesita la estructura base para poder empezar a construir la app siguiendo la arquitectura definida.

## What Changes

- Crear estructura de carpetas `layouts/`, `pages/`, `components/section/`, `components/shared/`, `services/`, `interfaces/`, `data/`, `utils/` dentro de `src/app/`
- Agregar `src/styles.css` con design tokens globales prefijados (`.os-*`) desde `assets/styles.css`
- Implementar `main-layout` con header, router-outlet y footer
- Implementar `header` compartido con navegación, theme toggle y menú móvil condicional
- Implementar `footer` compartido
- Configurar rutas: `/` redirige a `/home`, ruta para `home-page`
- Crear `content.service` inyectable con método `getNavigation()` tipado
- Crear interfaz `NavLink`
- Crear `utils/theme.ts` con señal global para tema dark/light con persistencia en localStorage
- Agregar `src/app/data/navigation.json` con datos de navegación
- No se incluye ninguna section de contenido (hero, concept, etc.) — solo el scaffold base
- Crear archivo `docs/roadmap.md` con la secuencia de changes planificados

## Capabilities

### New Capabilities

- `layout-engine`: Sistema de layouts con main-layout que envuelve header, router-outlet y footer
- `theme-system`: Sistema de tema oscuro/claro con señal global y persistencia localStorage
- `navigation`: Barra de navegación con links, theme toggle y menú móvil responsive
- `content-service`: Servicio inyectable que provee datos tipados desde archivos JSON estáticos

### Modified Capabilities

_(No existing capabilities to modify — first change on the project)_

## Impact

- `src/app/` — Nueva estructura de directorios completa
- `src/app/app.ts` — Componente raíz: se actualiza para usar `RouterOutlet` y redirigir a layout
- `src/app/app.config.ts` — Se actualiza con `provideRouter` y configuración necesaria
- `src/app/app.routes.ts` — Se definen rutas `/` y `/home`
- `src/styles.css` — Archivo nuevo con design tokens globales
- `angular.json` — Puede requerir ajuste en `styles` si es necesario
- `docs/roadmap.md` — Archivo nuevo con hoja de ruta
