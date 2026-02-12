import path from 'path';
import {defineConfig} from 'vitest/config';

const extensionModules = path.resolve(
  __dirname,
  'extensions/point-of-sale-testing-example/node_modules',
);

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'preact',
  },
  resolve: {
    modules: [extensionModules, 'node_modules'],
  },
  test: {
    environment: 'jsdom',
  },
});
