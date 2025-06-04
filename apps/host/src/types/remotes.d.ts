declare module 'reactList/ReactApp' {
  import { ComponentType } from 'react';

  import type { AppProps } from '@my-types/reactList/src/app/app.tsx';

  const App: ComponentType<AppProps>;
  export default App;
  export type { AppProps };
}

// declare module 'carter/Module' {
//   import { ComponentType } from 'react';
//
//   import type { AppProps } from '@my-types/reactList/src/app/app.tsx';
//
//   const App: ComponentType<AppProps>;
//   export default App;
//   export type { AppProps };
// }

declare module 'list/Routes' {
  import type { remoteRoutes } from '@my-types/list/src/app/remote-entry/entry.routes';
  export const remoteRoutes: typeof remoteRoutes;
}
