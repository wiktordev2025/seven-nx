import { AfterContentInit, Component } from '@angular/core';
import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  template: '<div id="react-list-root"></div>',
})
export class WrapperComponent implements AfterContentInit {
  async ngAfterContentInit(): Promise<void> {
    console.log('WrapperComponent ngAfterContentInit');
    try {
      await loadRemote('reactList/web-components');
      console.debug('reactList loaded');
    } catch (err) {
      console.error('error loading reactList:', err);
    }
  }
}
