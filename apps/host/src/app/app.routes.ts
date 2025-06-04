import { HomeComponent } from './home.component';
import { Route } from '@angular/router';
import {WrapperComponent} from './wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'react',
    component: WrapperComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
