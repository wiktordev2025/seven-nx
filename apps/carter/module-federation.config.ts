import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'carter',
  exposes: {
    './Module': './src/app/app.tsx',
  },
  additionalShared: [
    'react',
    'react-dom',
  ],
};

export default config;
