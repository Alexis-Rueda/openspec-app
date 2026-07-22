import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { theme, toggleTheme } from '../../../utils/theme';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="os-header">
      <div class="os-container os-header-inner">
        <a class="os-brand" routerLink="/">
          <span class="os-brand-mark">&lt;/&gt;</span>
          <span class="os-brand-name">OpenSpec</span>
        </a>
        <nav class="os-nav">
          @for (link of navLinks(); track link.href) {
            <a [routerLink]="link.href">{{ link.label }}</a>
          }
        </nav>
        <div class="os-header-actions">
          <button class="os-icon-btn" (click)="toggleTheme()" [attr.aria-label]="'Cambiar a tema ' + (theme() === 'dark' ? 'claro' : 'oscuro')">
            <span class="os-theme-icon"></span>
          </button>
          <a class="os-btn os-btn-ghost" href="https://github.com/Fission-AI/OpenSpec" target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
        <button class="os-menu-toggle" (click)="toggleMobileNav()" aria-label="Menú de navegación">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      @if (isMobileNavOpen()) {
        <div class="os-mobile-nav">
          @for (link of navLinks(); track link.href) {
            <a [routerLink]="link.href" (click)="closeMobileNav()">{{ link.label }}</a>
          }
        </div>
      }
    </header>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Header {
  private contentService = inject(ContentService);
  protected readonly navLinks = this.contentService.getNavigation();
  protected readonly theme = theme;
  protected readonly toggleTheme = toggleTheme;
  protected readonly isMobileNavOpen = signal(false);

  protected toggleMobileNav(): void {
    this.isMobileNavOpen.update((v) => !v);
  }

  protected closeMobileNav(): void {
    this.isMobileNavOpen.set(false);
  }
}
