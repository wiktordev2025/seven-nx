import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host',
  remotes: [
    // 'list', // Angular remote
    ['reactList', 'reactList@http://localhost:4202/remoteEntry.js'], // React remote with URL
    // 'reactList'
  ],
};
export default config;
