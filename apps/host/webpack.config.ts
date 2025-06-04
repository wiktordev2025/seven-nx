import {ModuleFederationPlugin} from '@module-federation/enhanced';

export default (config) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        'carter': 'carter@http://localhost:5201/remoteEntry.js'
      },
      shared: {
        '@angular/animations': {singleton: true, strictVersion: true},
        '@angular/core': {singleton: true, strictVersion: true},
        'react': {singleton: true, strictVersion: true},
        'react-dom': {singleton: true, strictVersion: true},
      }
    })
  );

  return config;
};
