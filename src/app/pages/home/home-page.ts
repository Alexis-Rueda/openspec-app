import { Component } from '@angular/core';
import { HeroSection } from '../../components/section/hero-section/hero';
import { ConceptSection } from '../../components/section/concept-section/concept';
import { FlowSection } from '../../components/section/flow-section/flow';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, ConceptSection, FlowSection],
  template: `
    <app-hero-section />
    <app-concept-section />
    <app-flow-section />
  `,
})
export class HomePage {}
