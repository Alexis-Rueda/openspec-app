import { TerminalLine } from './terminal-line.interface';

export interface CtaButton {
  label: string;
  href: string;
}

export interface Stat {
  dt: string;
  dd: string;
}

export interface HeroData {
  pill: string;
  title: string;
  subtitle: string;
  ctaButtons: CtaButton[];
  stats: Stat[];
  terminalLines: TerminalLine[];
  terminalTitle: string;
}
