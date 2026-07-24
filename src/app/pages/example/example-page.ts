import { Component, inject, signal, computed } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Terminal } from '../../components/shared/terminal/terminal';

@Component({
  selector: 'app-example-page',
  imports: [Terminal],
  templateUrl: './example-page.html',
  styleUrls: ['./example-page.css'],
})
export class ExamplePage {
  private contentService = inject(ContentService);
  private exampleData = this.contentService.getExample();

  readonly activeStep = signal(0);

  readonly title = computed(() => this.exampleData().title);
  readonly lead = computed(() => this.exampleData().lead);
  readonly steps = computed(() => this.exampleData().steps);
  readonly currentStep = computed(() => this.steps()[this.activeStep()]);
  readonly isFirst = computed(() => this.activeStep() === 0);
  readonly isLast = computed(() => this.activeStep() === this.steps().length - 1);

  goToStep(index: number): void {
    this.activeStep.set(index);
  }

  next(): void {
    if (!this.isLast()) {
      this.activeStep.update((i) => i + 1);
    }
  }

  prev(): void {
    if (!this.isFirst()) {
      this.activeStep.update((i) => i - 1);
    }
  }
}
