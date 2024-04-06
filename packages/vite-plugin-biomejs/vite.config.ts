import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [Inspect()],
  build: {
    sourcemap: true,
    ssr: 'src/index.ts',
    rollupOptions: {
      external: ['fsevents'],
    },
  },
});
