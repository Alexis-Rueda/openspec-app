## 1. Data Layer

- [x] 1.1 Crear `src/app/interfaces/example-step.interface.ts` con interfaces `ExampleStep` y `ExampleData`
- [x] 1.2 Crear `src/app/data/example.json` con los 5 pasos del flujo OpenSpec (explore, propose, apply, sync, archive)
- [x] 1.3 Agregar `getExample()` a `src/app/services/content.service.ts` con import JSON y return signal

## 2. Page Component

- [x] 2.1 Crear `src/app/pages/example/example-page.ts` — componente con stepper state (señal activeStep), navegación prev/next, click en step
- [x] 2.2 Crear `src/app/pages/example/example-page.html` — layout con header, stepper horizontal, terminal, botones de navegación
- [x] 2.3 Crear `src/app/pages/example/example-page.css` — estilos del stepper (círculos, líneas, active state), layout responsive

## 3. Integration

- [x] 3.1 Agregar ruta `/example` lazy-loaded a `src/app/app.routes.ts`
- [x] 3.2 Actualizar `src/app/data/navigation.json` — cambiar href de `/ejemplo` a `/example`

## 4. Verify

- [x] 4.1 Ejecutar `ng build` — sin errores
- [x] 4.2 Ejecutar `ng serve` — verificar que `/example` carga correctamente
- [x] 4.3 Verificar que el stepper funciona: click en paso muestra terminal correcto
- [x] 4.4 Verificar navegación prev/next funciona
- [x] 4.5 Verificar responsive en mobile (stepper con scroll horizontal)
- [x] 4.6 Verificar que link "Ejemplo" en navbar lleva a `/example`
