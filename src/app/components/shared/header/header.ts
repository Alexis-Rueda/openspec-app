import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { theme, toggleTheme } from '../../../utils/theme';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
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
