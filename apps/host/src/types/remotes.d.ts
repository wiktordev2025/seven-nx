declare module 'carter/Module' {
  import { ComponentType } from 'react';

  import type { AppProps } from '@global-types/carter/src/app/app.tsx';

  const App: ComponentType<AppProps>;
  export default App;
  export type { AppProps };
}
