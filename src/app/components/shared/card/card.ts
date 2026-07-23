import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
