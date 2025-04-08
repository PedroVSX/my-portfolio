import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    {
        path: 'header',
        loadComponent: () => import('./components/header/header.component').then(m => m.HeaderComponent)
    },
    {
        path: 'project-card',
        loadComponent: () => import('./components/project-card/project-card.component').then(m => m.ProjectCardComponent)
    }
];
