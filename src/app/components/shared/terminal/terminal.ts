import { Component, input } from '@angular/core';
import { TerminalLine } from '../../../interfaces/terminal-line.interface';

@Component({
  selector: 'app-terminal',
  template: `
    <div class="os-terminal">
      <div class="os-terminal-bar">
        <span class="os-dot os-dot-red"></span>
        <span class="os-dot os-dot-yellow"></span>
        <span class="os-dot os-dot-green"></span>
        @if (title()) {
          <span class="os-terminal-title">{{ title() }}</span>
        }
      </div>
      <pre class="os-terminal-body"><code>@for (line of lines(); track $index) {<span class="os-terminal-line" [innerHTML]="line.text"></span>}</code></pre>
    </div>
  `,
  styleUrls: ['./terminal.css'],
})
export class Terminal {
  readonly title = input<string>('');
  readonly lines = input<TerminalLine[]>([]);
}
