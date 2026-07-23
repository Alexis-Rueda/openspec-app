import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-concept-section',
  imports: [Card],
  template: `
    <section class="os-section">
      <div class="os-container">
        <div class="concept-header">
          <span class="concept-eyebrow">{{ concept().eyebrow }}</span>
          <h2 class="concept-title os-text-balance">{{ concept().title }}</h2>
          <p class="concept-lead os-text-pretty" [innerHTML]="concept().lead"></p>
        </div>
        <div class="concept-grid">
          @for (card of concept().cards; track $index) {
            <app-card
              [icon]="card.icon"
              [title]="card.title"
              [description]="card.description"
            />
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./concept.css'],
})
export class ConceptSection {
  private contentService = inject(ContentService);
  protected concept = this.contentService.getConcept();
}
