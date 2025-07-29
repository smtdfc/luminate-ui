import {
  ElementStyleBuilder,
  StyleBuilder,
  Variable,
  Builder,
} from './style.js';

export function style(b: Builder[] = []): StyleBuilder {
  let builder = new StyleBuilder();
  builder.add(...b);
  return builder;
}

export function tag(name: string): ElementStyleBuilder {
  let builder = new ElementStyleBuilder();
  builder.tag(name);
  return builder;
}

export function className(name: string): ElementStyleBuilder {
  let builder = new ElementStyleBuilder();
  builder.className(name);
  return builder;
}

export function id(name: string): ElementStyleBuilder {
  let builder = new ElementStyleBuilder();
  builder.id(name);
  return builder;
}

export function root(): ElementStyleBuilder {
  let builder = new ElementStyleBuilder(':root');
  return builder;
}

export function allElement(): ElementStyleBuilder {
  let builder = new ElementStyleBuilder('*');
  return builder;
}

export function value(variable: Variable): string {
  return variable.getCssVar();
}

export function args(...a: (string | Variable)[]): string {
  return a.map((v) => (v instanceof Variable ? v.getCssVar() : v)).join(' ');
}

export function capitalize(str: string): string {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function pass<T, U>(condition: boolean, value: T, fallback: U): T | U {
  return condition ? value : fallback;
}
