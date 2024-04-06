import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biomejs';

export default defineConfig({
  plugins: [biomePlugin()],
});
