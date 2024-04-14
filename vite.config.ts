import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [svgr(), react()],
    server: {
      host: true,
      port: 3000,
    },
    base: process.env.VITE_APP_BASE_PATH,
    resolve: {
      alias: [
        { find: '@adapters', replacement: resolve(__dirname, './src/adapters') },
        { find: '@assets', replacement: resolve(__dirname, './src/assets') },
        { find: '@components', replacement: resolve(__dirname, './src/components') },
        { find: '@config', replacement: resolve(__dirname, './src/config') },
        { find: '@contexts', replacement: resolve(__dirname, './src/contexts') },
        { find: '@hooks', replacement: resolve(__dirname, './src/hooks') },
        { find: '@pages', replacement: resolve(__dirname, './src/pages') },
        { find: '@routes', replacement: resolve(__dirname, './src/routes') },
        { find: '@services', replacement: resolve(__dirname, './src/services') },
        { find: '@app-types', replacement: resolve(__dirname, './src/types') },
        { find: '@utils', replacement: resolve(__dirname, './src/utils') },
      ],
    },
  });
};
