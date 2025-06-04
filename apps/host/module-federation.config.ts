import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: [
    'carter'
  ],
  additionalShared: [
    'react',
    'react-dom',
  ],
};
export default config;
