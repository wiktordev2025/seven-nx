import { AfterContentInit, Component } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';


@Component({
  template: `<div>
    Angular Wrapper Component
    <div id="react-list-root"></div>
  </div>`,
})
export class WrapperComponent implements AfterContentInit {
  async ngAfterContentInit() {
    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'reactList',
      exposedModule: './mountRemote',
    });

    const ReactApp = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'reactList',
      exposedModule: './ReactApp',
    });

    module.mountReactComponent(ReactApp.default, 'react-list-root');
  }

}
