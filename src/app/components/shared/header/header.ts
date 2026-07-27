import { Component, inject, signal, afterNextRender, DestroyRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { theme, toggleTheme } from '../../../utils/theme';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styles: [`
    :host { display: contents; }
  `]
})
export class Header {
  private contentService = inject(ContentService);
  private destroyRef = inject(DestroyRef);
  protected readonly navLinks = this.contentService.getNavigation();
  protected readonly theme = theme;
  protected readonly toggleTheme = toggleTheme;
  protected readonly isMobileNavOpen = signal(false);
  protected readonly isScrolled = signal(false);

  constructor() {
    afterNextRender(() => {
      const onScroll = () => {
        this.isScrolled.set(window.scrollY > 10);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
      onScroll();
    });
  }

  protected scrollToSection(event: Event, href: string): void {
    event.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMobileNav();
  }

  protected toggleMobileNav(): void {
    this.isMobileNavOpen.update((v) => !v);
  }

  protected closeMobileNav(): void {
    this.isMobileNavOpen.set(false);
  }
}
