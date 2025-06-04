declare module 'reactList/ReactApp' {
  import { ComponentType } from 'react';

  import type { AppProps } from 'reactList/src/app/app';

  const App: ComponentType<AppProps>;
  export default App;
  export type { AppProps };
}
