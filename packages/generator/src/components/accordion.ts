import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';



export default function(map: GeneratorMap) {
  
  map.set("accordion", (config: Config, generator: CSSGenerator) => {
    generator.addClass("accordion", {
      "--accordion-bg":"var(--main-bg-color)",
      "--accordion-color":"var(--main-text-color)",
      "--accordion-header-bg":"var(--light-color)",
      "--accordion-header-color":"var(--main-text-color)",

      display: "block",
      boxSizing: "border-box",
      border: `1px solid ${config.colors.light}`,
      borderRadius: config.borderRadius.lg,
      backgroundColor: config.colors.white,
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
    });
    
    generator.addClass("accordion-header", {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: config.spacings.md,
      backgroundColor: "var(--accordion-header-bg)",
      color: "var(--accordion-header-color)",
      transition: "background-color 0.2s ease"
    });
    
    generator.addClass("accordion-title", {
      fontWeight: "500",
      margin: 0,
      fontSize: "1rem"
    });
    
    generator.addClass("accordion-toggle-btn", {
      margin: "0!important",
      transition: "transform 0.3s ease"
    });
    
    generator.addClass("accordion-body", {
      display: "none",
      boxSizing: "border-box",
      borderTop: `1px solid ${config.colors.light}`,
      lineHeight: "1.5",
      backgroundColor: "var(--accordion-bg)",
      color: "var(--accordion-color)",
      overflow: "hidden",
      transition: "max-height 0.3s ease, opacity 0.3s ease",
      maxHeight: "0",
      opacity: "0",
      maxWidth: "100%"
    });
    
    generator.query(".accordion.active > .accordion-body", {
      display: "block",
      padding: config.spacings.md,
      maxHeight: "500px",
      opacity: "1"
    });
    
    generator.query(".accordion.active .accordion-toggle-btn", {
      transform: "rotate(180deg)"
    });
    
    return generator.generate();
  });
  
  map.set("accordion-group", (config: Config, generator: CSSGenerator) => {
    generator.query(".accordion-group .accordion", {
      borderRadius: "0"
    });
    
    generator.query(".accordion-group .accordion:first-child", {
      borderTopLeftRadius: config.borderRadius.lg,
      borderTopRightRadius: config.borderRadius.lg
    });
    
    generator.query(".accordion-group .accordion:last-child", {
      borderBottomLeftRadius: config.borderRadius.lg,
      borderBottomRightRadius: config.borderRadius.lg
    });
    
    return generator.generate();
  });
}