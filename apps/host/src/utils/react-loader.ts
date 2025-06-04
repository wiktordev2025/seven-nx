import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import {ReactComponentModule, ReactProps} from '../types/react-modules';
import {Injectable} from '@angular/core';

export interface ReactLoaderProps<T extends ReactProps> {
  container: HTMLElement;
  module: ReactComponentModule<T>;
  props: T;
}

@Injectable({ providedIn: 'root' })
export class ReactLoader {
  private root?: Root;

  async mount<T extends ReactProps>({ container, module, props }: ReactLoaderProps<T>) {
    this.root = createRoot(container);

    try {
      this.root.render(React.createElement(module.default, props));
    } catch (err) {
      console.error('Failed to mount React component:', err);
      this.root.render('Error isLoading remote component.');
    }
  }

  unmount() {
    this.root?.unmount();
  }
}
