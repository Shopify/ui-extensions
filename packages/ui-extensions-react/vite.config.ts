import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({mode}) => ({
  plugins: [
    dts({
      entryRoot: './src',
    }),
  ],

  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        /react-dom\/.*/,
        /@shopify\/ui-extensions\/.*/,
      ],
      output: [
        {
          dir: './dist',
          format: 'es',
        },
      ],
      treeshake: false,
    },
    emptyOutDir: true,
    sourcemap: mode === 'development',
    lib: {
      entry: {
        admin: new URL('./src/surfaces/admin.ts', import.meta.url).pathname,
        'customer-account': new URL(
          './src/surfaces/customer-account.ts',
          import.meta.url,
        ).pathname,
        checkout: new URL('./src/surfaces/checkout.ts', import.meta.url)
          .pathname,
        'point-of-sale': new URL(
          './src/surfaces/point-of-sale.ts',
          import.meta.url,
        ).pathname,
      },
    },
  },
}));
