// import commonjs from '@rollup/plugin-commonjs'; // 将 CommonJS 模块转换为 ES6 模块
// import resolve from '@rollup/plugin-node-resolve'; // 解析Node模块
// import json from '@rollup/plugin-json'; // 解析JSON用
// import { terser } from 'rollup-plugin-terser'; // 代码压缩
import Inspect from 'vite-plugin-inspect';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [Inspect()],
  build: {
    sourcemap: true,
    ssr: 'src/index.ts',
    rollupOptions: {
      external: ['fsevents'],
      // plugins: [resolve(), commonjs()],
    },
  },
  // ssr: {
  //   noExternal: true,
  // },
});
