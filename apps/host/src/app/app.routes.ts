import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {WrapperComponent} from './wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'list',
    loadChildren: () => import('list/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'react',
    component: WrapperComponent,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
