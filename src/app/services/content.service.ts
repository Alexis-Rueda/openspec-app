import { Injectable, signal, Signal } from '@angular/core';
import { NavLink } from '../interfaces/nav-link.interface';
import { HeroData } from '../interfaces/hero-data.interface';
import { ConceptData } from '../interfaces/card-data.interface';
import { WorkflowData } from '../interfaces/workflow-step.interface';
import { ProsConsData } from '../interfaces/pros-cons-data.interface';
import { CommandsData } from '../interfaces/command-item.interface';
import navigationData from '../data/navigation.json';
import heroData from '../data/hero.json';
import conceptData from '../data/concept.json';
import workflowData from '../data/workflow-steps.json';
import prosConsData from '../data/pros-cons.json';
import commandsData from '../data/commands.json';

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

  getProsCons(): Signal<ProsConsData> {
    return signal(prosConsData as ProsConsData);
  }

  getCommands(): Signal<CommandsData> {
    return signal(commandsData as CommandsData);
  }
}
