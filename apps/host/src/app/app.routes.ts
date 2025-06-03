import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {WrapperComponent} from './wrapper.component';
import {WrapperMountedComponent} from './wrapper.mounted.component';

export const appRoutes: Route[] = [
  // {
  //   path: 'list',
  //   loadChildren: () => import('list/Routes').then((m) => m!.remoteRoutes),
  // },
  // {
  //   path: 'react',
  //   loadChildren: () => import('reactList/Module').then((m) => {
  //     console.log('m: ', m);
  //     return m!.default || m;
  //   }),
  // },
  {
    path: 'react-mount',
    component: WrapperMountedComponent,
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
