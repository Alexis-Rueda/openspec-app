import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <article class="os-card">
      <div class="os-card-icon">{{ icon() }}</div>
      <h3>{{ title() }}</h3>
      <p [innerHTML]="description()"></p>
    </article>
  `,
  styleUrls: ['./card.css'],
})
export class Card {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
