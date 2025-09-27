import { HtmlTagDescriptor, Plugin } from 'vite';
import { scan, generate, collapseArray, Config } from 'neon-ui-generator';

function arrayToUniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export interface NeonUIPluginOptions {
  output?: string;
  config?: Partial<Config>;
}

function escapeRegex(string: string) {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default function neonUIPlugin(
  options: NeonUIPluginOptions = {},
): Plugin {
  let classes: string[] = [];

  const cssFileName = options.output ?? 'index.css';
  const config = options.config ?? {};
  let isDev = false;
  return {
    name: 'vite-plugin-neon-ui',

    configResolved(config) {
      isDev = config.command === 'serve';
    },

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

      classes = arrayToUniqueArray(classes);
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

    transformIndexHtml: {
      order: 'post',
      handler: (html, ctx) => {
        const tags: HtmlTagDescriptor[] = [];
        const bundle = ctx.bundle;
        if (isDev) {
          tags.push({
            tag: 'style',
            children: generate(classes, config),
            injectTo: 'head',
          });
        }

        if (bundle != null) {
          Object.values(bundle)
            .filter((output) => output.fileName.endsWith('.css'))
            .forEach((output) => {
              if (
                output.type === 'asset' &&
                typeof output.source === 'string'
              ) {
                tags.push({
                  tag: 'style',
                  children: output.source,
                  injectTo: 'head',
                });
                const fileNameRegExp = RegExp(
                  `<link.*href=".*${escapeRegex(output.fileName)}".*\\/?>`,
                  'gmi',
                );
                html = html.replaceAll(fileNameRegExp, '');
              }
            });
        }
        return { html, tags };
      },
    },
  };
}
