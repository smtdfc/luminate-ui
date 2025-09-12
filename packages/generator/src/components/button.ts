import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';



export default function(map: GeneratorMap) {
  
  map.set("button", (config: Config, generator: CSSGenerator) => {
    let spacings: Record < string, string > = config.spacings ?? {};
    
    generator.addClass("btn", {
      "--btn-bg": "transparent",
      "--btn-color": "var(--main-color)",
      "--btn-border-color": "var(--btn-bg)",
      "background": "var(--btn-bg)",
      "color": "var(--btn-color)",
      "padding": spacings.sm,
      "margin": spacings.sm,
      "border-radius": config.borderRadius.md,
      "border": "solid 1.5px var(--btn-border-color)",
      "transition": "ease 0.3s all",
    });
    
    generator.query(".btn:hover", {
      "transform": "scale(0.98)"
    });
    
    let colors = Object.keys(config.colors);
    colors.forEach((c) => {
      generator.addClass(`btn-${c}`, {
        "--btn-bg": `var(--${c}-color)`,
        "--btn-color": `var(--on-${c}-color)`,
        "--btn-border-color": `var(--${c}-color)`,
      });
    });
    
    Object.entries(spacings).forEach(([size, value]) => {
      generator.addClass(`btn-${size}`, {
        "padding": value,
        "font-size": (() => {
          switch (size) {
            case "xs":
              return "0.75rem";
            case "sm":
              return "0.875rem";
            case "md":
              return "1rem";
            case "lg":
              return "1.125rem";
            default:
              return "1rem";
          }
        })()
      });
    });
    return generator.generate();
  })
  
  
  map.set("button-outline", (config: Config, generator: CSSGenerator) => {
    let colors = Object.keys(config.colors);
    colors.forEach((c) => {
      generator.addClass(`btn-outline-${c}`, {
        "--btn-bg": `transparent`,
        "--btn-color": `var(--${c}-color)`,
        "--btn-border-color": `var(--${c}-color)`,
      });
      
      generator.query(`.btn-outline-${c}:hover`, {
        "--btn-bg": `var(--${c}-color)`,
        "--btn-color": `var(--on-${c}-color)`,
        "--btn-border-color": `var(--${c}-color)`,
      });
    });
    
    return generator.generate();
  });
  
  map.set("button-icon", (config: Config, generator: CSSGenerator) => {
    generator.addClass(`btn-text-icon`, {
      "display": "flex",
      "alignItems": "center",
      "columnGap": "5px",
      "paddingLeft":"10px",
      "paddingRight":"10px"
    });
    
    generator.addClass(`btn-icon`, {
      "borderRadius": config.borderRadius.full,
      "--btn-bg": `transparent`,
      "--btn-color": `var(--main-text-color)`,
      "--btn-border-color": `transparent`,
    });
    
    generator.query(`.btn-icon:hover`, {
      "--btn-bg": `var(--main-hover-color)`,
    });
    
    return generator.generate();
  });
  
}