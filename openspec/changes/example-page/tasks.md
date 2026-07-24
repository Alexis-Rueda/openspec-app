## 1. Data Layer

- [ ] 1.1 Crear `src/app/interfaces/example-step.interface.ts` con interfaces `ExampleStep` y `ExampleData`
- [ ] 1.2 Crear `src/app/data/example.json` con los 5 pasos del flujo OpenSpec (explore, propose, apply, sync, archive)
- [ ] 1.3 Agregar `getExample()` a `src/app/services/content.service.ts` con import JSON y return signal

## 2. Page Component

- [ ] 2.1 Crear `src/app/pages/example/example-page.ts` — componente con stepper state (señal activeStep), navegación prev/next, click en step
- [ ] 2.2 Crear `src/app/pages/example/example-page.html` — layout con header, stepper horizontal, terminal, botones de navegación
- [ ] 2.3 Crear `src/app/pages/example/example-page.css` — estilos del stepper (círculos, líneas, active state), layout responsive

## 3. Integration

- [ ] 3.1 Agregar ruta `/example` lazy-loaded a `src/app/app.routes.ts`
- [ ] 3.2 Actualizar `src/app/data/navigation.json` — cambiar href de `/ejemplo` a `/example`

## 4. Verify

- [ ] 4.1 Ejecutar `ng build` — sin errores
- [ ] 4.2 Ejecutar `ng serve` — verificar que `/example` carga correctamente
- [ ] 4.3 Verificar que el stepper funciona: click en paso muestra terminal correcto
- [ ] 4.4 Verificar navegación prev/next funciona
- [ ] 4.5 Verificar responsive en mobile (stepper con scroll horizontal)
- [ ] 4.6 Verificar que link "Ejemplo" en navbar lleva a `/example`
