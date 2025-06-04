import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { ReactComponentModule, ReactProps } from '../types/react-modules';
import { Injectable } from '@angular/core';

export interface ReactLoaderProps<T extends ReactProps> {
  container: HTMLElement;
  module: ReactComponentModule<T>;
  props: T;
}

@Injectable({ providedIn: 'root' })
export class ReactLoader {
  private roots = new WeakMap<HTMLElement, Root>();

  async mount<T extends ReactProps>({ container, module, props }: ReactLoaderProps<T>) {
    let root = this.roots.get(container);
    if (!root) {
      root = createRoot(container);
      this.roots.set(container, root);
    }
    try {
      root.render(React.createElement(module.default, props));
    } catch (err) {
      console.error('Failed to mount React component:', err);
      root.render('Error loading remote component.');
    }
  }

  unmount(container: HTMLElement) {
    const root = this.roots.get(container);
    if (root) {
      root.unmount();
      this.roots.delete(container);
    }
  }
}
