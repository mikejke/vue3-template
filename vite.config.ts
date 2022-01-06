import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import stylelint from '@frsource/vite-plugin-stylelint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint(), stylelint()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
