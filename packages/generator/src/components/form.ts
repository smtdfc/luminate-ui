import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function(map: GeneratorMap) {
  
  // Label
  map.set("form-label", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-label", {
      fontSize: "14px",
      fontWeight: 500,
      color: config.mainColors.text,
      marginBottom: config.spacings.xs,
    });
    return generator.generate();
  });
  
  // Subtext / helper text
  map.set("form-text", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-text", {
      fontSize: "12px",
      color: "#6b7280", // gray-500
      marginTop: config.spacings.xs,
    });
    return generator.generate();
  });
  
  // ==== INPUT ====
  map.set("form-input", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-input", {
      "--form-color": "var(--main-text-color)",
      "--form-border-color": "gray",
      padding: config.spacings.md,
      border: "1.5px solid var(--form-border-color)",
      borderRadius: config.borderRadius.md,
      backgroundColor: "rgba(255,255,255,0.05)",
      color: "var(--form-color)",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    });
    
    generator.query(".form-input:focus", {
      "--form-border-color": "var(--primary-color)",
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.2)",
      backgroundColor: "rgba(255,255,255,0.1)",
    });
    
    // group
    generator.addClass("form-input-group", {
      display: "flex",
      flexFlow: "column",
      marginBottom: config.spacings.md,
    });
    
    generator.query(".form-input-group.success .form-input", {
      "--form-border-color": "var(--success-color)!important",
    });
    
    generator.query(".form-input-group.failed .form-input", {
      "--form-border-color": "var(--danger-color)!important",
    });
    
    return generator.generate();
  });
  
  
  // ==== SELECT ====
  map.set("form-select", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-select", {
      padding: config.spacings.md,
      border: "1.5px solid #ccc",
      borderRadius: config.borderRadius.md,
      backgroundColor: "#fff",
      color: config.mainColors.text,
      fontSize: config.fontSizes.sm,
      transition: "all 0.2s ease",
      cursor: "pointer",
    });
    
    generator.query(".form-select:focus", {
      borderColor: "var(--primary-color)",
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.2)",
    });
    
    // group
    generator.addClass("form-select-group", {
      display: "flex",
      flexFlow: "column",
      marginBottom: config.spacings.md,
    });
    
    generator.query(".form-select-group.success .form-select", {
      borderColor: "var(--success-color)!important",
    });
    
    generator.query(".form-select-group.failed .form-select", {
      borderColor: "var(--danger-color)!important",
    });
    
    return generator.generate();
  });
  
  
  // ==== CHECKBOX ====
  map.set("form-check", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-check", {
      display: "flex",
      alignItems: "center",
      gap: config.spacings.sm,
      cursor: "pointer",
    });
    
    generator.query(".form-check input[type=checkbox]", {
      width: "16px",
      height: "16px",
      borderRadius: config.borderRadius.sm,
      border: "1.5px solid #ccc",
      transition: "all 0.2s ease",
      cursor: "pointer",
    });
    
    generator.query(".form-check input[type=checkbox]:checked", {
      backgroundColor: "var(--primary-color)",
      borderColor: "var(--primary-color)",
    });
    
    // group
    generator.addClass("form-check-group", {
      display: "flex",
      flexFlow: "column",
      gap: config.spacings.sm,
      marginBottom: config.spacings.md,
    });
    
    return generator.generate();
  });
  
  
  // ==== RADIO ====
  map.set("form-radio", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-radio", {
      display: "flex",
      alignItems: "center",
      gap: config.spacings.sm,
      cursor: "pointer",
    });
    
    generator.query(".form-radio input[type=radio]", {
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      border: "1.5px solid #ccc",
      transition: "all 0.2s ease",
      cursor: "pointer",
    });
    
    generator.query(".form-radio input[type=radio]:checked", {
      backgroundColor: "var(--primary-color)",
      borderColor: "var(--primary-color)",
    });
    
    // group
    generator.addClass("form-radio-group", {
      display: "flex",
      flexFlow: "column",
      gap: config.spacings.sm,
      marginBottom: config.spacings.md,
    });
    
    return generator.generate();
  });
  
  
  // ==== FILE ====
  map.set("form-file", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-file", {
      display: "block",
      fontSize: config.fontSizes.sm,
      color: config.mainColors.text,
      cursor: "pointer",
    });
    
    generator.query(".form-file input[type=file]", {
      display: "block",
      padding: config.spacings.sm,
      border: "1.5px solid #ccc",
      borderRadius: config.borderRadius.md,
      backgroundColor: "#fff",
      transition: "all 0.2s ease",
    });
    
    generator.query(".form-file input[type=file]:focus", {
      borderColor: "var(--primary-color)",
      boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.2)",
      outline: "none",
    });
    
    // group
    generator.addClass("form-file-group", {
      display: "flex",
      flexFlow: "column",
      marginBottom: config.spacings.md,
    });
    
    return generator.generate();
  });
  
  
  // ==== RANGE ====
  map.set("form-range", (config: Config, generator: CSSGenerator) => {
    generator.addClass("form-range", {
      width: "100%",
      cursor: "pointer",
      appearance: "none",
      height: "4px",
      borderRadius: "4px",
      background: "#e5e7eb",
    });
    
    generator.query(".form-range::-webkit-slider-thumb", {
      appearance: "none",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      background: "var(--primary-color)",
      cursor: "pointer",
      transition: "all 0.2s ease",
    });
    
    generator.query(".form-range::-moz-range-thumb", {
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      background: "var(--primary-color)",
      cursor: "pointer",
    });
    
    // group
    generator.addClass("form-range-group", {
      display: "flex",
      flexFlow: "column",
      marginBottom: config.spacings.md,
    });
    
    return generator.generate();
  });
}