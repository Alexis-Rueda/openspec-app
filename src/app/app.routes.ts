import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
      },
      {
        path: 'example',
        loadComponent: () => import('./pages/example/example-page').then((m) => m.ExamplePage),
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  },
];
