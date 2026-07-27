import { signal, WritableSignal } from '@angular/core';

const THEME_STORAGE_KEY = 'os-theme';

export const theme: WritableSignal<'dark' | 'light'> = signal<'dark' | 'light'>('dark');

export function initTheme(): void {
  const saved = sessionStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') {
    theme.set(saved);
  } else {
    theme.set('dark');
  }
}

export function toggleTheme(): void {
  theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
}
