import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../../services/content.service';
import { Terminal } from '../../shared/terminal/terminal';

@Component({
  selector: 'app-hero-section',
  imports: [Terminal],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroSection {
  private contentService = inject(ContentService);
  private router = inject(Router);
  protected hero = this.contentService.getHero();

  protected scrollToSection(event: Event, href: string): void {
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
}
