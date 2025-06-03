import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'reactList',
  exposes: {
    './Module': './src/remote-entry.ts',
    "./ReactApp": "./src/app/app.tsx",
    './mountRemote': './src/app/mount-remote.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
