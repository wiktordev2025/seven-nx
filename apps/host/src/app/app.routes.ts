import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
// import {WrapperComponent} from './wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'list',
    loadChildren: () => import('list/Routes').then((m) => m!.remoteRoutes),
  },
  // {
  //   path: 'react',
  //   loadChildren: () => import('reactList/Module').then((m) => {
  //     console.log('m: ', m);
  //     return m!.default || m;
  //   }),
  // },
  // {
  //   path: 'react',
  //   component: WrapperComponent,
  // },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
