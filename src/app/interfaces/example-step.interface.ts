import { TerminalLine } from './terminal-line.interface';

export interface ExampleStep {
  command: string;
  title: string;
  description: string;
  terminalLines: TerminalLine[];
}

export interface ExampleData {
  title: string;
  lead: string;
  steps: ExampleStep[];
}
