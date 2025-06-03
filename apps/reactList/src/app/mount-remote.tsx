import React from 'react';
import { createRoot } from 'react-dom/client';

export function mountReactComponent(Component: React.ComponentType<any>, elementId: string, props: any = {}) {
  const container = document.getElementById(elementId);
  if (container) {
    const root = createRoot(container);
    root.render(React.createElement(Component, props));
  }
}
