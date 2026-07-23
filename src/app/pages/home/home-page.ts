import { Component } from '@angular/core';
import { HeroSection } from '../../components/section/hero-section/hero';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection],
  template: `
    <app-hero-section />
  `,
})
export class HomePage {}
