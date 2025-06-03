import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'reactList',
  exposes: {
    './Module': './src/remote-entry.ts',
    "./ReactApp": "./src/app/app.tsx",
    './mountRemote': './src/app/mount-remote.tsx',
  },
};
export default config;
