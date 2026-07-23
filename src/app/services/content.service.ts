import { Injectable, signal, Signal } from '@angular/core';
import { NavLink } from '../interfaces/nav-link.interface';
import { HeroData } from '../interfaces/hero-data.interface';
import { ConceptData } from '../interfaces/card-data.interface';
import { WorkflowData } from '../interfaces/workflow-step.interface';
import navigationData from '../data/navigation.json';
import heroData from '../data/hero.json';
import conceptData from '../data/concept.json';
import workflowData from '../data/workflow-steps.json';

@Injectable({ providedIn: 'root' })
export class ContentService {
  getNavigation(): Signal<NavLink[]> {
    return signal(navigationData as NavLink[]);
  }

  getHero(): Signal<HeroData> {
    return signal(heroData as HeroData);
  }

  getConcept(): Signal<ConceptData> {
    return signal(conceptData as ConceptData);
  }

  getWorkflowSteps(): Signal<WorkflowData> {
    return signal(workflowData as WorkflowData);
  }
}
