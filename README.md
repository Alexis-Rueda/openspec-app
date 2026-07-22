# OpenspecApp

Guía interactiva de OpenSpec construida **con OpenSpec** (dogfooding). App Angular que documenta el flujo spec-driven usando el mismo flujo spec-driven para crearse.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Angular v22 |
| Lenguaje | TypeScript v6 |
| Testing | Vitest v4 |
| Metodología | OpenSpec spec-driven |
| AI assistant | OpenCode AI + MCP Angular CLI |

## Workflow OpenSpec

El proyecto sigue el ciclo spec-driven. Los comandos disponibles via OpenCode AI:

| Comando | Propósito |
|---------|-----------|
| `/opsx:explore` | Explorar ideas, investigar problemas, clarificar requisitos |
| `/opsx:propose` | Crear propuesta completa con diseño, especs y tareas |
| `/opsx:apply` | Implementar tareas de un change |
| `/opsx:sync` | Sincronizar delta specs a main specs |
| `/opsx:update` | Revisar artefactos de planificación |
| `/opsx:archive` | Archivar un change completado |

Ciclo típico: **explore → propose → apply → sync → archive**

## Estructura del proyecto

```
openspec-app/
├── openspec/           # Artefactos OpenSpec
│   ├── config.yaml     # Configuración del proyecto
│   ├── specs/          # Especificaciones principales
│   └── changes/        # Changes activos y archive
├── .opencode/          # Config OpenCode AI + skills
│   ├── commands/       # Comandos opsx
│   └── skills/         # Skills openspec-*
├── .agents/skills/     # Skills auxiliares (13 instaladas)
├── assets/             # Contenido fuente / referencia visual
│   └── ... (landing page OpenSpec)
    └── src/                # App Angular
        └── app/
            ├── components/     # Componentes reutilizables
            │   ├── section/    # Secciones de contenido (hero, concept, etc.)
            │   └── shared/     # Componentes compartidos (header, footer)
            ├── interfaces/     # Interfaces TypeScript
            ├── layouts/        # Layouts de página
            ├── pages/          # Páginas (lazy-loaded)
            ├── services/       # Servicios inyectables
            ├── data/           # Datos estáticos JSON
            └── utils/          # Utilidades (theme, etc.)
```

## Assets

La carpeta `assets/` contiene una landing page estática sobre OpenSpec (HTML+CSS+JS + Tailwind). Sirve como **contenido fuente** y referencia de diseño para la app Angular. No está incluida en el build de Angular.

## Comandos

```bash
ng serve        # Servidor de desarrollo
ng test         # Tests unitarios (Vitest)
ng build        # Build producción
```

## Skills instaladas

Angular developer, Vitest, Accessibility, SEO, Frontend Design, TypeScript advanced types, Node.js best practices, y más (ver `skills-lock.json`).
