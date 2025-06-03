import { AfterContentInit, Component } from '@angular/core';
import { loadRemoteModule } from '@nx/angular/mf';
// import {loadRemote} from '@module-federation/enhanced/dist/src/runtime';

@Component({
  template: '<div id="react-list-root"></div>',
})
export class WrapperComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    loadRemoteModule('reactList', './web-components')
      .then(() => console.debug('reactList loaded'))
      .catch((err: any) => console.error(`error loading reactList:`, err));
  }
}


// loadRemote('react-app', './web-components')
//   .then(m => m.RemoteEntryModule)
//   .then(() => console.debug('react-app loaded'))
//   .catch((err: any) => console.error(`error loading react-app:`, err));
