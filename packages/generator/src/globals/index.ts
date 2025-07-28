import {
  className,
  cloneQueryStr,
  style,
  query
} from '../base/index.js';

export const colorMap: Record < string, string > = {
  primary: "#007bff",
  secondary: "#6c757d",
  info: "#17a2b8",
  success: "#28a745",
  warn: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#343a40",
  "on-primary": "#ffffff",
  "on-secondary": "#ffffff",
  "on-info": "#ffffff",
  "on-success": "#ffffff",
  "on-warn": "#212529",
  "on-danger": "#ffffff",
  "on-light": "#212529",
  "on-dark": "#ffffff",
};

export const colors = Object.keys(colorMap);
export const globalsVars: Record<string,string>= {
  "--main-bg":"white",
  "--main-color":"dark"
};

for (let name of colors) {
  globalsVars[`--${name}-color`] = colorMap[name];
}

export const globals = style([
  query(":root").style(globalsVars), 
  query("*").style({
    "margin":"0",
    "padding":"0",
    "boxSizing":"border-box"
  })
]);