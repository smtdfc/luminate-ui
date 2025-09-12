import { defaultConfig, Config, groups as allGroup } from './config/index.js';
import components from './components/index.js';
import helpers from './helpers/index.js';
import globalGen from './global/index.js';
import { GeneratorFn, GeneratorMap } from './types/index.js';
import { CSSGenerator } from './base/index.js';

const generatorMap: GeneratorMap = new Map<string, GeneratorFn>();
const componentCache = new Map<string, string>();
globalGen(generatorMap);
components(generatorMap);
helpers(generatorMap);

export function mergeConfig<T extends object>(base: T, override: Partial<T>): T;
export function mergeConfig<T extends object>(
  base: T,
  override: Partial<T>,
): T {
  const result: any = { ...base };

  for (const key of Object.keys(override)) {
    const baseVal = result[key];
    const overrideVal = (override as any)[key];

    if (
      baseVal &&
      overrideVal &&
      typeof baseVal === 'object' &&
      typeof overrideVal === 'object' &&
      !Array.isArray(baseVal) &&
      !Array.isArray(overrideVal)
    ) {
      result[key] = mergeConfig(baseVal, overrideVal);
    } else if (overrideVal !== undefined) {
      result[key] = overrideVal;
    }
  }

  return result;
}

function generateComponent(
  name: string,
  config: Config,
  generator: CSSGenerator,
) {
  const cacheKey = JSON.stringify({ name, config });
  if (componentCache.has(cacheKey)) return componentCache.get(cacheKey)!;

  const css = generatorMap.get(name)!(config, generator);
  componentCache.set(cacheKey, css);
  return css;
}

export function generate(
  groups: string[] = allGroup,
  config: Partial<Config> = {},
): string {
  const finalConfig = mergeConfig(defaultConfig, config);
  let css = '';
  const generator = new CSSGenerator();

  for (let name of groups) {
    if (generatorMap.has(name)) {
      css += generateComponent(name, finalConfig, generator);
      generator.reset();
    }
  }

  return css;
}
