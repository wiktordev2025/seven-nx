import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('react-list-root') as HTMLElement
);
root.render(
  <StrictMode>
    <div>React bootstrap .div.</div>
    <App />
  </StrictMode>
);
