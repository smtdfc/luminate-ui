import { CSSGenerator } from '../base/index.js';
import { Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function(map: GeneratorMap) {
  map.set("list", (config: Config, generator: CSSGenerator) => {
    
    return generator.generate();
  });
  
}