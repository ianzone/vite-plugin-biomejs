import { Biome, type Configuration, Distribution } from '@biomejs/js-api';
import { type Plugin, normalizePath } from 'vite';

export default function biomePlugin(config?: Configuration): Plugin {
  let biome: Biome | undefined;
  const shouldLint = (path: string) => path.match(/\/src\/[^?]*\.(vue|svelte|m?[jt]sx?)$/);

  return {
    name: 'vite-plugin-biomejs',
    async transform(code: string, id: string) {
      const path = normalizePath(id);

      if (shouldLint(path)) {
        // console.log('Linting', path);

        if (!biome) {
          biome = await Biome.create({
            distribution: Distribution.NODE,
          });
        }

        try {
          if (config) {
            biome.applyConfiguration(config);
          }
        } catch (err) {
          console.error(err);
        }

        const formatted = biome.formatContent(code, {
          filePath: path,
        });

        const result = biome.lintContent(formatted.content, {
          filePath: path,
        });

        return result.content;
      }
      return code;
    },
  };
}
