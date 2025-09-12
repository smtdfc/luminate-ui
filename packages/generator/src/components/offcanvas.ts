import { CSSGenerator } from '../base/index.js';
import { Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function(map: GeneratorMap) {
  map.set("offcanvas", (config: Config, generator: CSSGenerator) => {
    generator.addClass("offcanvas", {
      "--offcanvas-bg": "var(--main-bg-color)",
      "--offcanvas-color": "var(--main-text-color)",
      "--offcanvas-menu-item-color": "var(--main-text-color)",
      "--offcanvas-menu-item-hover-color": "var(--primary-color)",
      "--offcanvas-menu-item-hover-bg": "var(--main-hover-color)",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "width": "90%",
      "height": "100%",
      "background": "var(--offcanvas-bg)",
      "color": "var(--offcanvas-color)",
      "boxShadow": "4px 0 12px rgba(0, 0, 0, 0.15)",
      "display": "flex",
      "flexDirection": "column",
      "zIndex": "1002",
      "transition": "transform 0.5s ease, opacity 0.5s ease",
      "transform": "translateX(-100%)",
      "opacity": "0"
    });
    
    generator.addClass("offcanvas-header", {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between",
      "padding": "1rem",
      "borderBottom": "1px solid #eee",
      "background": "var(--offcanvas-bg)",
      "color": "var(--offcanvas-color)",
    });
    
    generator.addClass("offcanvas-title", {
      "fontSize": "1.25rem",
      "fontWeight": "normal",
      "margin": "0"
    });
    
    generator.addClass("offcanvas-toggle-btn", {
      "margin": "0"
    });
    
    generator.addClass("offcanvas-body", {
      "flex": "1",
      "padding": "1rem",
      "overflowY": "auto",
      "background": "var(--offcanvas-bg)",
      "color": "var(--offcanvas-color)",
    });
    
    generator.addClass("offcanvas-footer", {
      "padding": "1rem",
      "borderTop": "1px solid #eee",
      "background": "var(--offcanvas-bg)",
      "color": "var(--offcanvas-color)",
    });
    
    generator.addClass("offcanvas.open", {
      "transform": "translateX(0%)",
      "opacity": "1"
    });
    
    generator.addClass("offcanvas-overlay", {
      "position": "fixed",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "background": "rgba(0, 0, 0, 0.19)",
      "backdropFilter": "blur(8px)",
      "opacity": "0",
      "display": "none",
      "transition": "opacity 0.3s ease",
      "zIndex": "1001"
    });
    
    generator.addClass("offcanvas-overlay.open", {
      "display": "block",
      "opacity": "1"
    });
    
    generator.addMediaQuery("(min-width:48rem)", {
      ".offcanvas": {
        "maxWidth": "40vw"
      }
    });
    
    return generator.generate();
  });
  
  map.set("offcanvas-menu", (config: Config, generator: CSSGenerator) => {
    
    generator.addClass("offcanvas-menu", {
      "listStyle": "none",
      "padding": "0"
    });
    
    generator.addClass("offcanvas-menu a", {
      "textDecoration": "none"
    });
    
    generator.addClass("offcanvas-menu li>a", {
      "borderRadius": "10px",
      "padding": "0.8rem",
      "color": "var(--offcanvas-menu-item-color)",
      "display": "flex",
      "alignItems": "center",
      "columnGap": "10px",
      "transition": "all 0.2s ease",
      "fontSize": "16px"
    });
    
    generator.query(".offcanvas-menu .state-icon", {
      "marginLeft": "auto",
      "fontSize": "18px",
      "transition": "transform 0.2s ease",
      "display": "block !important",
      "pointerEvents": "none"
    });
    
    generator.query(".offcanvas-menu .icon", {
      "fontSize": "20px",
      "display": "block !important",
      "pointerEvents": "none"
    });
    
    generator.query(".offcanvas-menu li>a:hover", {
      "color": "var(--offcanvas-menu-item-hover-color)",
      "background": "var(--offcanvas-menu-item-hover-bg)"
    });
    
    generator.query(".offcanvas-menu li>ul", {
      "display": "none",
      "margin": "3px 0px 3px 20px",
      "padding": "0",
      "listStyle": "none",
      "paddingLeft": "5px",
      "borderLeft": "solid 1px rgba(0, 0, 0, 0.15)"
    });
    
    generator.query(".offcanvas-menu li.open>ul", {
      "display": "block"
    });
    
    generator.query(".offcanvas-menu li>a:hover>.state-icon", {
      "transform": "translateX(2px)"
    });
    
    generator.query(".offcanvas-menu li.open>a>.state-icon", {
      "transform": "rotate(-90deg)"
    });
    
    return generator.generate();
  });
}