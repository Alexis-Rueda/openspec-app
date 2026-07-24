export interface CommandItem {
  cmd: string;
  desc: string;
  type: 'cli' | 'chat';
}

export interface CommandsData {
  eyebrow: string;
  title: string;
  lead: string;
  commands: CommandItem[];
}
