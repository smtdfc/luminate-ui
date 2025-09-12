export interface CSSProperties {
  [key: string]: string | number | CSSProperties;
}

export interface Keyframes {
  [key: string]: CSSProperties;
}

export interface MediaQueries {
  [key: string]: CSSProperties;
}

export class CSSGenerator {
  private queries: Record < string, CSSProperties > = {};
  private classes: Record < string, CSSProperties > = {};
  private keyframes: Record < string, Keyframes > = {};
  private mediaQueries: Record < string, MediaQueries > = {};
  
  private toKebabCase(str: string) {
    return str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
  }
  
  private buildCSS(rules: CSSProperties, indent = 0): string {
    const space = '  '.repeat(indent);
    let css = '';
    
    for (const [key, value] of Object.entries(rules)) {
      if (typeof value === 'object') {
        css += `${space}${key} {\n${this.buildCSS(value, indent + 1)}${space}}\n`;
      } else {
        css += `${space}${this.toKebabCase(key)}: ${value};\n`;
      }
    }
    
    return css;
  }
  
  reset() {
    this.queries = {};
    this.mediaQueries = {};
    this.classes = {};
    this.keyframes = {};
  }
  
  query(q: string, rules: CSSProperties) {
    this.queries[q] = rules;
  }
  
  addClass(className: string, rules: CSSProperties) {
    this.classes[className] = rules;
  }
  
  addKeyframes(name: string, frames: Keyframes) {
    this.keyframes[name] = frames;
  }
  
  addMediaQuery(query: string, rules: MediaQueries) {
    this.mediaQueries[query] = rules;
  }
  
  generate(): string {
    let css = '';
    
    for (const [className, rules] of Object.entries(this.classes)) {
      css += `.${className} {\n${this.buildCSS(rules)}\n}\n`;
    }
    
    for (const [q, rules] of Object.entries(this.queries)) {
      css += `${q} {\n${this.buildCSS(rules)}\n}\n`;
    }
    
    for (const [name, frames] of Object.entries(this.keyframes)) {
      css += `@keyframes ${name} {\n`;
      for (const [percent, rules] of Object.entries(frames)) {
        css += `  ${percent} {\n${this.buildCSS(rules, 2)}  }\n`;
      }
      css += `}\n`;
    }
    
    for (const [query, rules] of Object.entries(this.mediaQueries)) {
      css += `@media ${query} {\n${this.buildCSS(rules, 1)}}\n`;
    }
    
    return css;
  }
}