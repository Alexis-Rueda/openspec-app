import { Component } from '@angular/core';
import { HeroSection } from '../../components/section/hero-section/hero';
import { ConceptSection } from '../../components/section/concept-section/concept';
import { FlowSection } from '../../components/section/flow-section/flow';
import { ProsConsSection } from '../../components/section/pros-cons-section/pros-cons';
import { CommandsSection } from '../../components/section/commands-section/commands';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, ConceptSection, FlowSection, ProsConsSection, CommandsSection],
  template: `
    <app-hero-section />
    <app-concept-section />
    <app-flow-section />
    <app-pros-cons-section />
    <app-commands-section />
  `,
})
export class HomePage {}
