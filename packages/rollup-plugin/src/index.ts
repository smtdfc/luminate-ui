import { Plugin } from 'rollup';
import { scan, generate, Config, matchClass } from 'luminate-ui-generator';

export interface LuminateUIPluginOptions {
  output: string;
  config?: Partial<Config>;
}

export default function LuminateUIPlugin(
  options: LuminateUIPluginOptions = {
    output: 'index.css',
  },
): Plugin {
  let classes: string[] = [];

  const cssFileName = options.output ?? 'index.css';
  const config = options.config ?? {};

  return {
    name: 'rollup-plugin-luminate-ui',

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
      const newClasses = result.classes.map((c: string) => matchClass(c));
      classes.push(...newClasses);

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
