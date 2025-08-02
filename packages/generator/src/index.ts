import { defaultConfig ,Config} from './config/index.js';
import { generators } from './generator/index.js';

export function generateAll(
  config: Config = defaultConfig,
): string {
  let css = '';
  css += generators.global(config).generate() + '\n';
  for (let initializer of Object.values(generators.components)) {
    css += initializer(config).generate() + '\n';
  }

  return css;
}

const variants = defaultConfig.baseColors;

const patterns = [
  {
    pattern: new RegExp(`^btn-(${variants.join('|')})$`),
    action: (config:Config) => config.components.button.enabled.variant = true
  },
  {
    pattern: new RegExp(`^btn-outline-(${variants.join('|')})$`),
    action: (config:Config) => config.components.button.enabled.outlineVariant = true
  }
];

export function generateConfigFromClassNams(
  className: string,
  rootConfig:Config = defaultConfig
):Config{
  for (let { pattern, action } of patterns) {
    if (pattern.test(className)) {
      action(rootConfig);
    }
  }
  
  return rootConfig;
}

export * from './types/index.js';
export * from './config/index.js';
