import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'reactList',
  exposes: {
    './Module': './src/remote-entry.ts',
    './web-components': './src/bootstrap.tsx'
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
