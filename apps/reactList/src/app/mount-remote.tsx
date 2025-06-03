import React from 'react';
import ReactDOM from 'react-dom/client';

export function mountReactComponent(Component: React.ComponentType, elementId: string) {
  const container = document.getElementById(elementId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Component />);
  }
}
