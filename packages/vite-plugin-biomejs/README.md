`pnpm add -D vite-plugin-biomejs`

in vite.config.ts

```ts
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biomejs";

export default defineConfig({
  plugins: [biomePlugin()],
});
```
