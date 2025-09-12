import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';



export default function(map: GeneratorMap) {
  map.set("border", (config: Config, generator: CSSGenerator) => {
    for (let [name, val] of Object.entries(config.borderRadius)) {
      generator.addClass(`border-${name}`, {
        borderRadius: val
      });
    }
    
    return generator.generate();
  });
  
  map.set("padding", (config: Config, generator: CSSGenerator) => {
    let count = 1;
    for (let [name, val] of Object.entries(config.spacings)) {
      generator.addClass(`p-${count}`, {
        padding: val
      });
      
      generator.addClass(`pl-${count}`, {
        paddingLeft: val
      });
      
      generator.addClass(`pr-${count}`, {
        paddingRight: val
      });
      
      generator.addClass(`pt-${count}`, {
        paddingTop: val
      });
      
      generator.addClass(`pb-${count}`, {
        paddingBottom: val
      });
      
      generator.addClass(`px-${count}`, {
        padding:`0 ${val}`
      });
      
      generator.addClass(`py-${count}`, {
        padding: `${val} 0`
      });
      
      count++;
    }
    
    return generator.generate();
  });
}