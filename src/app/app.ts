import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initTheme, applyThemeEffect } from './utils/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {
  constructor() {
    afterNextRender(() => {
      initTheme();
      applyThemeEffect();
    });
  }
}
