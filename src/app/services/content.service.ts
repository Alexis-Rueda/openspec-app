import { Injectable, signal, Signal } from '@angular/core';
import { NavLink } from '../interfaces/nav-link.interface';
import navigationData from '../data/navigation.json';

@Injectable({ providedIn: 'root' })
export class ContentService {
  getNavigation(): Signal<NavLink[]> {
    return signal(navigationData as NavLink[]);
  }
}
