import { effect, signal, WritableSignal } from '@angular/core';

const THEME_STORAGE_KEY = 'os-theme';

export const theme: WritableSignal<'dark' | 'light'> = signal<'dark' | 'light'>('dark');

export function initTheme(): void {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') {
    theme.set(saved);
  } else {
    theme.set('dark');
  }
}

export function toggleTheme(): void {
  theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
}

export function applyThemeEffect(): void {
  effect(() => {
    const current = theme();
    document.documentElement.className = `theme-${current}`;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', current === 'dark' ? '#0b0f14' : '#f6f8fa');
    }
    localStorage.setItem('os-theme', current);
  });
}
