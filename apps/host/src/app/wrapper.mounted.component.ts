
import {Component, Input, OnInit} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  template: `<div>
    Angular Wrapper Mounted Component
    <div id="react-list-root"></div>
  </div>`,
})
export class WrapperMountedComponent implements OnInit {
  @Input() title: string = 'Default Title from My Host Angular';
  @Input() someOtherData: any = { name: 'John', age: 30 };

  async ngOnInit() {
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

    const propsFromAngular = {
      title: this.title,
      userData: this.someOtherData
    };

    module.mountReactComponent(ReactApp.default, 'react-list-root', propsFromAngular);
  }
}
