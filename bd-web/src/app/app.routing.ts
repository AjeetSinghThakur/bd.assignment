import { Routes } from '@angular/router';
import { PageNotFoundComponent, } from './shared/components';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/start' },
  { path: 'start', loadChildren: () => import('@app/start/start.module').then(m => m.StartModule)},
  { path: 'notfound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
