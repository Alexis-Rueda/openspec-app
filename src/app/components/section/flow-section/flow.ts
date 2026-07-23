import { Component, inject } from '@angular/core';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-flow-section',
  templateUrl: './flow.html',
  styleUrls: ['./flow.css'],
})
export class FlowSection {
  private contentService = inject(ContentService);
  protected readonly workflowData = this.contentService.getWorkflowSteps();
}
