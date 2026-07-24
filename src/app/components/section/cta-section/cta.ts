import { Component, inject, signal } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { copyToClipboard } from '../../../utils/clipboard';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta.html',
  styleUrls: ['./cta.css'],
})
export class CtaSection {
  private contentService = inject(ContentService);
  protected readonly data = this.contentService.getCta();
  protected readonly copied = signal(false);

  async copyCommand(): Promise<void> {
    const success = await copyToClipboard(this.data().command);
    if (success) {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}