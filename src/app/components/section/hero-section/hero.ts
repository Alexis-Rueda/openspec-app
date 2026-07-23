import { Component, inject } from '@angular/core';
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
  protected hero = this.contentService.getHero();
}
