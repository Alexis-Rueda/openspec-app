import { Injectable, signal, Signal } from '@angular/core';
import { NavLink } from '../interfaces/nav-link.interface';
import { HeroData } from '../interfaces/hero-data.interface';
import navigationData from '../data/navigation.json';
import heroData from '../data/hero.json';

@Injectable({ providedIn: 'root' })
export class ContentService {
  getNavigation(): Signal<NavLink[]> {
    return signal(navigationData as NavLink[]);
  }

  getHero(): Signal<HeroData> {
    return signal(heroData as HeroData);
  }
}
