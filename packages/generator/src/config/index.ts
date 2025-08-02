import globalConfig from './globals.js';
import buttonConfig from './button.js';
import accordionConfig from './accordion.js';
import cardConfig from './card.js';

function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const result = { ...target };

  for (const key in source) {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (
      sourceValue &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      key in target
    ) {
      result[key] = deepMerge(
        targetValue,
        sourceValue as T[Extract<keyof T, string>],
      );
    } else if (sourceValue !== undefined) {
      result[key] = sourceValue as T[Extract<keyof T, string>];
    }
  }

  return result;
}
export const defaultConfig = {
  ...globalConfig,
  components: {
    button: buttonConfig,
    accordion:accordionConfig,
    card:cardConfig
  },
};

export type Config = typeof defaultConfig;
export function mergeConfig(
  config: Partial<Config>,
): Config {
  return deepMerge(defaultConfig, config);
}
