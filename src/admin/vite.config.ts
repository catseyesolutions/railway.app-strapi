import { mergeConfig } from 'vite';
import type { UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['.railway.app'],       // or ['.railway.app']
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  });
};
