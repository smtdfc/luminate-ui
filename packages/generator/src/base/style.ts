export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export class StyleSheet {
  constructor(public styles: Record < string, string >= {}) {}
  merge(s: Record < string, string >= {}) {
    this.styles = { ...this.styles, ...s };
  }
  
  generate(): string {
    return Object.entries(this.styles).map(([name, value]) => {
      return `${camelToKebab(name)}:${value};`
    }).join(" ");
  }
  
}

export class Variable {
  constructor(public name: string, public value: string) {}
  cssName() {
    return `--${camelToKebab(this.name)}`;
  }
  
  getCssVar() {
    return `var(--${camelToKebab(this.name)})`
  }
}

export class ElementStyleBuilder {
  private isTagStart = false;
  private _style = new StyleSheet({});
  constructor(public query: string = "") {}
  
  child(query: string = ""): ElementStyleBuilder {
    return new ElementStyleBuilder(`${this.query} ${query}`);
  }
  
  cloneQuery(query: string = ""): ElementStyleBuilder {
    return new ElementStyleBuilder(`${this.query}${query}`);
  }
  
  tag(name: string): this {
    if (!this.isTagStart) {
      this.isTagStart = true;
      this.query += ` ${name}`;
    }
    return this;
  }
  
  className(name: string): this {
    this.query += `.${name}`;
    return this;
  }
  
  id(name: string): this {
    this.query += `#${name}`;
    return this;
  }
  
  pseudo(name: string): this {
    this.query += `:${name}`;
    return this;
  }
  
  pseudoElement(name: string): this {
    this.query += `::${name}`;
    return this;
  }
  
  styles(s: Record < string, string >= {}): this {
    this._style.merge(s);
    return this;
  }
  
  createVariable(name: string, value: string): Variable {
    let variable = new Variable(name, value);
    this._style.merge({
      [variable.cssName()]: value
    });
    return variable;
  }
  
  setVariable(variable: Variable, value: string): this {
    variable.value = value;
    this._style.merge({
      [variable.cssName()]: value
    });
    return this;
  }
  
  generate(): string {
    let css = `${this.query}{ ${this._style.generate()} }\n`;
    return css;
  }
}
export type Builder = ElementStyleBuilder;
export class StyleBuilder {
  private items: Builder[] = [];
  constructor() {}
  
  add(...b: Builder[]) {
    this.items.push(...b);
  }
  
  generate(): string {
    return this.items.map(v => v.generate()).join("\n");
  }
}
