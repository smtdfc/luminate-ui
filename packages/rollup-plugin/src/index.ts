import { Plugin } from 'rollup';
import { scan, generate, Config } from 'neon-ui-generator';

export interface NeonUIPluginOptions {
  output: string;
  config?: Partial<Config>;
}

export default function neonUIPlugin(
  options: NeonUIPluginOptions = {
    output: 'index.css',
  },
): Plugin {
  let classes: string[] = [];

  const cssFileName = options.output ?? 'index.css';
  const config = options.config ?? {};

  return {
    name: 'rollup-plugin-neon-ui',

    transform(source: string, id: string) {
      if (
        !id.endsWith('.tsx') &&
        !id.endsWith('.jsx') &&
        !id.endsWith('.ts') &&
        !id.endsWith('.js')
      ) {
        return null;
      }

      const result = scan(source);
      classes.push(...result.classes);

      return {
        code: result.code,
        map: result.map ?? null,
      };
    },

    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: cssFileName,
        source: generate(classes, config),
      });
    },
  };
}
