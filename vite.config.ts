import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@hooks', replacement: resolve(__dirname, './src/hooks') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@routes', replacement: resolve(__dirname, './src/routes') },
      { find: '@services', replacement: resolve(__dirname, './src/services') },
      { find: '@app-types', replacement: resolve(__dirname, './src/types') },
    ],
  },
});
