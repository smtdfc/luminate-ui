import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function(map: GeneratorMap) {
  map.set("table", (config: Config, generator: CSSGenerator) => {
    
    generator.addClass("table", {
      "--table-bg":"var(--main-bg)",
      "--table-color":"var(--main-text-color)",
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0",
      fontSize: config.fontSizes.sm,
      color: "var(--table-color)",
      backgroundColor: "var(--table-bg)",
    });
    
    generator.query(".table th", {
      padding: config.spacings.md,
      textAlign:"center",
      fontWeight: 600,
      backgroundColor: "var(--table-bg)",
      borderBottom: "1px solid #e5e7eb",
    });
    
    generator.query(".table td", {
      textAlign:"center",
      padding: config.spacings.md,
      borderBottom: "1px solid #f1f1f1",
    });
    
    generator.query(".table tr:hover td", {
      backgroundColor: "var(--table-bg)",
    });
    
    generator.addClass("table-responsive", {
      width: "100%",
      overflowX: "auto",
     " --webkit-overflow-scrolling": "touch",
      borderRadius: config.borderRadius.lg,
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      position: "relative",
      minHeight: "200px", 
      boxSizing:"border-box"
    });
    
    generator.query(".table-responsive .table", {
      marginBottom: 0,
      borderRadius: config.borderRadius.lg,
    });
    
    generator.addClass("table-empty-fallback", {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      height: "100%",
      color: "#9ca3af",
      fontSize: config.fontSizes.sm,
      fontStyle: "italic",
      padding: config.spacings.lg,
    });
    
    return generator.generate();
  });
}