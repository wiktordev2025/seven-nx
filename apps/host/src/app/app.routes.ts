import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {WrapperComponent} from './wrapper.component';

export const appRoutes: Route[] = [
  // {
  //   path: 'list',
  //   loadChildren: () => import('list/Routes').then((m) => m!.remoteRoutes),
  // },
  // {
  //   path: 'reactList',
  //   loadChildren: () => import('reactList/Module').then((m) => {
  //     console.log('m: ', m);
  //     return m!.default || m;
  //   }),
  // },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'react',
    component: WrapperComponent
  },
];
