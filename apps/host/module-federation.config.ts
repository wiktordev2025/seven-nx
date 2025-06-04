import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: [
    'list', // Angular remote
    // 'carter'
    ['carter', 'carter@http://localhost:5201/remoteEntry.js'], // React remote with URL
  ],
  additionalShared: [
    'react',
    'react-dom',
  ],
};
export default config;
