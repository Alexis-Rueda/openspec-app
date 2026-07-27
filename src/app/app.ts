import { Component, afterNextRender, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { theme } from './utils/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {
  constructor() {
    const saved = sessionStorage.getItem('os-theme');
    if (saved === 'light' || saved === 'dark') {
      theme.set(saved);
    }
    effect(() => {
      const current = theme();
      document.documentElement.className = `theme-${current}`;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', current === 'dark' ? '#0b0f14' : '#f6f8fa');
      }
      sessionStorage.setItem('os-theme', current);
    });
  }
}
