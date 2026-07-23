## 1. Interfaces y data

- [ ] 1.1 Crear `src/app/interfaces/pros-cons-data.interface.ts` con `ProsConsData { eyebrow: string; title: string; lead: string; pros: string[]; cons: string[] }`
- [ ] 1.2 Crear `src/app/data/pros-cons.json` con contenido completo: eyebrow `"03 · Balance"`, headline `"Ventajas y desventajas"`, lead párrafo, 6 pros y 6 cons según referencia en assets/index.html

## 2. Componente pros-cons-section

- [ ] 2.1 Crear `src/app/components/section/pros-cons-section/pros-cons.ts` — Componente standalone que usa ContentService.getProsCons() y renderiza la sección con dos columnas
- [ ] 2.2 Template en `pros-cons.html`: section.os-section.os-section-alt > div.os-container > div.section-head con eyebrow + h2 + p lead + div.pros-cons con dos pc-col (pc-pros y pc-cons), cada una con h3 + badge + ul > li items
- [ ] 2.3 Estilos encapsulados en `pros-cons.css`: layout grid 2 columnas desktop / stack mobile, badges verde/rojo, estilos de listas

## 3. Content service update

- [ ] 3.1 Agregar método `getProsCons(): Signal<ProsConsData>` en content.service.ts que importa pros-cons.json y devuelve señal

## 4. Integración con home-page

- [ ] 4.1 Importar ProsConsSection en home-page.ts y renderizar `<app-pros-cons-section />` debajo de `<app-flow-section />`
