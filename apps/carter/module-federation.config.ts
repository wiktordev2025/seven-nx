import {ModuleFederationConfig} from '@nx/module-federation/src/utils/models';

const config: ModuleFederationConfig = {
  name: 'carter',
  exposes: {
    './Module': './src/app/app.tsx',
  },
  additionalShared: [
    'react',
    'react-dom',
  ],
  library: {
    type: 'module', // This enables ESM format
    name: 'carter'
  },
};

export default config;
