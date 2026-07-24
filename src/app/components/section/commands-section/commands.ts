import { Component, inject, signal, computed } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { CommandItem } from '../../../interfaces/command-item.interface';

@Component({
  selector: 'app-commands-section',
  templateUrl: './commands.html',
  styleUrls: ['./commands.css'],
})
export class CommandsSection {
  private contentService = inject(ContentService);
  protected readonly data = this.contentService.getCommands();

  protected readonly tabs = [
    { label: 'Todos', filter: 'all' as const },
    { label: 'Terminal (openspec)', filter: 'cli' as const },
    { label: 'Chat (/opsx:)', filter: 'chat' as const },
  ];

  protected readonly activeFilter = signal<'all' | 'cli' | 'chat'>('all');

  protected readonly filteredCommands = computed<CommandItem[]>(() => {
    const filter = this.activeFilter();
    const commands = this.data().commands;
    return filter === 'all' ? commands : commands.filter(c => c.type === filter);
  });

  setFilter(filter: 'all' | 'cli' | 'chat'): void {
    this.activeFilter.set(filter);
  }
}
