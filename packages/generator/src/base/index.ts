export type Pattern = `${string}-*`;
export type ClassName = string;

export interface MatchResult {
  prefix: string;
  values: string[];
}

export class Keyframes {
  constructor(
    public name: string,
    public frames: Record < string, Record < string, string >>
  ) {}
  
  generator(): string {
    const blocks = Object.entries(this.frames)
      .map(([step, styles]) => {
        const body = Object.entries(styles)
          .map(([key, value]) => `${this.normalizeKey(key)}: ${value};`)
          .join(' ');
        return `${step} { ${body} }`;
      })
      .join(' ');
    
    return `@keyframes ${this.name} { ${blocks} }`;
  }
  
  private normalizeKey(key: string): string {
    return key.replace(/[A-Z]/g, match => '-' + match.toLowerCase());
  }
}

export class MediaQuery {
  constructor(
    public condition: string,
    public items: QueryBuilder[] = []
  ) {}
  
  generator(): string {
    const rules = this.items.map(item => item.generator()).join('\n');
    return `@media ${this.condition} {\n${rules}\n}`;
  }
}

export class QueryBuilder {
  public _style = new StyleSheet({});
  constructor(public query: string) {}
  
  tag(name: string): this {
    this.query += name + "";
    return this;
  }
  
  id(name: string): this {
    this.query += `#${name}`;
    return this;
  }
  
  className(name: string): this {
    this.query += `.${name}`;
    return this;
  }
  
  style(d: Record < string, string > ): this {
    this._style.merge(new StyleSheet(d));
    return this;
  }
  
  pseudo(className: string): this {
    this.query += `:${className}`;
    return this;
  }
  
  pseudoElement(name: string): this {
    this.query += `::${name}`;
    return this;
  }
  
  child(selector: string): this {
    this.query += ` ${selector}`;
    return this;
  }
  
  generator(): string {
    const selector = this.query.trim();
    const style = this._style.generator();
    return selector ? `${selector} { ${style} }` : "";
  }
}

export class StyleSheet {
  constructor(public styles: Record < string, string > ) {}
  merge(styleSheet: StyleSheet) {
    this.styles = { ...this.styles, ...styleSheet.styles };
  }
  generator(): string {
    return Object.entries(this.styles)
      .map(([key, value]) => `${this.normalizeKey(key)}: ${value};`)
      .join(' ');
  }
  
  private normalizeKey(key: string): string {
    return key.replace(/[A-Z]/g, match => '-' + match.toLowerCase());
  }
}

export class Style {
  constructor(public items: (QueryBuilder | MediaQuery | Keyframes)[] = []) {}
  
  generator(): string {
    return this.items.map(item => item.generator()).join('\n');
  }
}

export function cloneQueryStr(q: QueryBuilder): QueryBuilder {
  return new QueryBuilder(q.query);
}

export function style(items: (QueryBuilder | Style | MediaQuery | Keyframe)[]): Style {
  const result = new Style();
  
  for (const item of items) {
    if (item instanceof MediaQuery) {
      result.items.push(item);
    } else if (item instanceof QueryBuilder) {
      result.items.push(item);
    } else if (item instanceof Style) {
      result.items.push(...item.items);
    }
  }
  
  return result;
}

export function keyframes(name: string, frames: Record < string, Record < string, string >> ): Keyframes {
  return new Keyframes(name, frames);
}

export function query(q: string): QueryBuilder {
  return new QueryBuilder(q);
}

export function id(q: string): QueryBuilder {
  return new QueryBuilder("").id(q);
}

export function className(q: string): QueryBuilder {
  return new QueryBuilder("").className(q);
}

export function tag(q: string): QueryBuilder {
  return new QueryBuilder("").tag(q);
}

export function extractPatternMatches(
  classList: ClassName[],
  patterns: Pattern[]
): MatchResult[] {
  const result: MatchResult[] = [];
  
  for (const pattern of patterns) {
    const prefix = pattern.replace('-*', '');
    const values: string[] = [];
    
    for (const className of classList) {
      if (className.startsWith(prefix + '-')) {
        const suffix = className.slice(prefix.length + 1);
        values.push(suffix);
      }
    }
    
    if (values.length > 0) {
      result.push({ prefix, values });
    }
  }
  
  return result;
}
