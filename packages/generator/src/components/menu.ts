import { CSSGenerator } from '../base/index.js';
import { Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function(map: GeneratorMap) {
  map.set("menu", (config: Config, generator: CSSGenerator) => {
    
    generator.addClass("menu", {
      "--menu-item-color": "var(--main-text-color)",
      "--menu-item-hover-color": "var(--primary-color)",
      "--menu-item-hover-bg": "var(--main-hover-color)",
      "listStyle": "none",
      "padding": "0"
    });
    
    generator.addClass("menu a", {
      "textDecoration": "none"
    });
    
    generator.addClass("menu li>a", {
      "borderRadius": "10px",
      "padding": "0.8rem",
      "color": "var(--menu-item-color)",
      "display": "flex",
      "alignItems": "center",
      "columnGap": "10px",
      "transition": "all 0.2s ease",
      "fontSize": "16px"
    });
    
    generator.query(".menu .state-icon", {
      "marginLeft": "auto",
      "fontSize": "18px",
      "transition": "transform 0.2s ease",
      "display": "block !important",
      "pointerEvents": "none"
    });
    
    generator.query(".menu .icon", {
      "fontSize": "20px",
      "display": "block !important",
      "pointerEvents": "none"
    });
    
    generator.query(".menu li>a:hover", {
      "color": "var(--menu-item-hover-color)",
      "background": "var(--menu-item-hover-bg)"
    });
    
    generator.query(".menu li>ul", {
      "display": "none",
      "margin": "3px 0px 3px 20px",
      "padding": "0",
      "listStyle": "none",
      "paddingLeft": "5px",
      "borderLeft": "solid 1px rgba(0, 0, 0, 0.15)"
    });
    
    generator.query(".menu li.open>ul", {
      "display": "block"
    });
    
    generator.query(".menu li>a:hover>.state-icon", {
      "transform": "translateX(2px)"
    });
    
    generator.query(".menu li.open>a>.state-icon", {
      "transform": "rotate(-90deg)"
    });
    
    return generator.generate();
  });
}