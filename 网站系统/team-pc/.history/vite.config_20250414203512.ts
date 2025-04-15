import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve as pathResolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    hmr: true,
    open: true
    },
    resolve: {
      alias: [
      {
      find: '@',
      replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
function resolve(__dirname: string, arg1: string): string {
  return pathResolve(__dirname, arg1);
}

