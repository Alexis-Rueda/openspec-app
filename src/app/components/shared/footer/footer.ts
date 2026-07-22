import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="os-footer">
      <div class="os-container os-footer-inner">
        <span class="os-footer-note">
          <span class="os-brand-mark">&lt;/&gt;</span> OpenSpec &mdash; Flujos de trabajo dirigidos por especificaciones
        </span>
        <a class="os-footer-top" href="#" (click)="scrollToTop($event)">Volver arriba</a>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Footer {
  protected scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
