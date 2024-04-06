import { Biome, Distribution } from '@biomejs/js-api';
import { type Plugin, normalizePath } from 'vite';

export default function biomePlugin(): Plugin {
  let biome: Biome | undefined;
  const shouldLint = (path: string) => path.match(/\/src\/[^?]*\.(vue|svelte|m?[jt]sx?)$/);

  return {
    name: 'vite-plugin-biomejs',
    async transform(code: string, id: string) {
      const path = normalizePath(id);

      if (shouldLint(path)) {
        console.log('Linting', path);
        if (!biome) {
          biome = await Biome.create({
            distribution: Distribution.NODE,
          });
        }

        const formatted = biome.formatContent(code, {
          filePath: id,
        });

        const result = biome.lintContent(formatted.content, {
          filePath: id,
        });

        return result.content;
      }
      return code;
    },
  };
}
