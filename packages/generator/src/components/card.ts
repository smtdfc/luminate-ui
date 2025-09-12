import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function(map: GeneratorMap) {
  map.set("card", (config: Config, generator: CSSGenerator) => {
    generator.addClass("card", {
      "--card-bg": "var(--main-bg)",
      "--card-color": "var(--main-text-color)",
      "display": "block",
      "boxSizing": "border-box",
      "background": "var(--card-bg)",
      "color": "var(--card-color)",
      "borderRadius": "0.75rem",
      "border": "1px solid rgba(0,0,0,0.05)",
      "transition": "box-shadow 0.2s ease"
    });
    
    generator.addClass("card-body", {
      "padding": "1rem"
    });
    
    generator.addClass("card-header", {
      "padding": "1rem"
    });
    
    generator.addClass("card-footer", {
      "padding": "1rem"
    });
    
    generator.addClass("card-img-top", {
      "borderTopLeftRadius": "0.75rem",
      "borderTopRightRadius": "0.75rem",
      "width": "100%",
      "display": "block"
    });
    
    generator.addClass("card-img-bottom", {
      "borderBottomLeftRadius": "0.75rem",
      "borderBottomRightRadius": "0.75rem",
      "width": "100%",
      "display": "block"
    });
    
    generator.addClass("card-title", {
      "fontSize": "20px",
      "fontWeight": "370",
      "margin": "0"
    });
    
    generator.addClass("card-subtitle", {
      "fontSize": "12px",
      "fontWeight": "normal",
      "margin": "0"
    });
    
    generator.addClass("card-group", {
      "display": "flex",
      "flexDirection": "row",
      "columnGap": "0.5rem",
      "maxWidth": "100%",
      "overflowX": "scroll"
    });
    
    generator.addMediaQuery("(max-width:48rem)", {
      ".card": {
        "flex": "1 0 98%"
      }
    });
    
    return generator.generate();
  });
}