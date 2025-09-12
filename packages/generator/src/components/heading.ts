import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';



export default function(map: GeneratorMap) {
  
  map.set("heading", (config: Config, generator: CSSGenerator) => {
    const headings = [
      { name: "heading-1", size: "2.5rem", weight: 400, lineHeight: 1.3, margin: "1.5rem 0" },
      { name: "heading-2", size: "2rem", weight: 450, lineHeight: 1.35, margin: "1.2rem 0" },
      { name: "heading-3", size: "1.5rem", weight: 500, lineHeight: 1.4, margin: "1rem 0" },
      { name: "heading-4", size: "1.2rem", weight: 400, lineHeight: 1.45, margin: "0.8rem 0" },
      { name: "heading-5", size: "1rem", weight: 400, lineHeight: 1.4, margin: "0.6rem 0" },
      { name: "heading-6", size: "0.875rem", weight: 400, lineHeight: 1.35, margin: "0.5rem 0" },
      { name: "heading-7", size: "0.75rem", weight: 300, lineHeight: 1.3, margin: "0.4rem 0" },
      { name: "heading-8", size: "0.625rem", weight: 300, lineHeight: 1.25, margin: "0.3rem 0" }
    ];
    
    headings.forEach(h => {
      generator.addClass(h.name, {
        "fontFamily": "'Inter', sans-serif",
        "fontSize": h.size,
        "fontWeight": h.weight,
        "lineHeight": h.lineHeight,
        "margin": h.margin,
        "color": h.name === "heading-1" || h.name === "heading-2" ? "var(--main-text-color)" : "var(--secondary-text-color)",
        "letterSpacing": "0.8px",
        "paddingLeft": "0",
        "textTransform": "capitalize"
      });
      
      generator.addClass(`${h.name}-subtext`, {
        "fontFamily": "'Inter', sans-serif",
        "fontSize": h.size,
        "fontWeight": h.weight,
        "lineHeight": h.lineHeight,
        "margin": h.margin,
        "color": "gray", 
        "letterSpacing": "0.8px",
        "paddingLeft": "0",
        "textTransform": "capitalize"
      });
    });
    
    
    
    return generator.generate();
  });
  
}