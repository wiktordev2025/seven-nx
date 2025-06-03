import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'host',
  remotes: [
    {
      name: 'reactList',
      entry: 'http://localhost:4202/mf-manifest.json',
    },
  ],
});

import('./bootstrap').catch((err) => console.error(err));
