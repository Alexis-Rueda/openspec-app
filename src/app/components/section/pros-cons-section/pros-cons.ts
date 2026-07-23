import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-pros-cons-section',
  templateUrl: './pros-cons.html',
  styleUrls: ['./pros-cons.css'],
})
export class ProsConsSection {
  private contentService = inject(ContentService);
  protected readonly data = this.contentService.getProsCons();
}
