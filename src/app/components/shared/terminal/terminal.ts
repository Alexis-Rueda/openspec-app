import { Component, input } from '@angular/core';
import { TerminalLine } from '../../../interfaces/terminal-line.interface';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrls: ['./terminal.css'],
})
export class Terminal {
  readonly title = input<string>('');
  readonly lines = input<TerminalLine[]>([]);
}
