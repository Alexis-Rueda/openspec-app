import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-concept-section',
  imports: [Card],
  templateUrl: './concept.html',
  styleUrls: ['./concept.css'],
})
export class ConceptSection {
  private contentService = inject(ContentService);
  protected concept = this.contentService.getConcept();
}
