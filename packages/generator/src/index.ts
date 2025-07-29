export * from './types/index.js';
export * from './config/index.js';

import { defaultConfig } from './config/index.js';
import {
  generators
} from './generator/index.js';

export function generateAll(config: typeof defaultConfig = defaultConfig): string {
  let css = "";
  css += generators.global(config).generate() + "\n";
  for (let initializer of Object.values(generators.components)) {
    css += initializer(config).generate() + "\n";
  }
  
  return css;
}
