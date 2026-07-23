import { Component } from '@angular/core';
import { HeroSection } from '../../components/section/hero-section/hero';
import { ConceptSection } from '../../components/section/concept-section/concept';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, ConceptSection],
  template: `
    <app-hero-section />
    <app-concept-section />
  `,
})
export class HomePage {}
