import { AfterContentInit, Component } from '@angular/core';
// import { loadRemote } from '@module-federation/enhanced/runtime';
import { importRemote } from 'module-federation-import-remote';

@Component({
  template: '<div id="react-list-root"></div>',
})
export class WrapperComponent implements AfterContentInit {
  // async ngAfterContentInit(): Promise<void> {
  //   console.log('WrapperComponent ngAfterContentInit');
  //   try {
  //     await loadRemote('reactList/web-components');
  //     console.debug('reactList loaded');
  //   } catch (err) {
  //     console.error('error loading reactList:', err);
  //   }
  // }

  unmount: (s: string) => void = () => {};

  ngAfterContentInit() {
    importRemote<{ inject: (s: string) => void; unmount: (s: string) => void }>(
      {
        url: 'http://localhost:3002',
        scope: 'reactList',
        module: './injectApp',
      }
    )
      .then(({ inject, unmount }) => {
        inject('react-list-root');
        this.unmount = unmount;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  ngOnDestroy() {
    this.unmount('react-list-root');
  }
}
