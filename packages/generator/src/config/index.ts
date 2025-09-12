export const Spacings = ["xs", "sm", "md", "lg", "xl", "2xl"] as
const;

export const SpacingsMap = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  "2xl": "2rem" // 32px
};

export const Colors = {
  primary: "#3B82F6", // blue-500
  secondary: "#64748B", // slate-500
  success: "#22C55E", // green-500
  danger: "#EF4444", // red-500
  warning: "#F59E0B", // amber-500
  info: "#0EA5E9", // sky-500
  light: "#F9FAFB", // gray-50
  dark: "#111827", // gray-900
  
  // extra accents
  muted: "#9CA3AF", // gray-400
  indigo: "#6366F1", // indigo-500
  violet: "#8B5CF6", // violet-500
  pink: "#EC4899", // pink-500
  teal: "#14B8A6", // teal-500
  orange: "#FB923C", // orange-400
  cyan: "#06B6D4", // cyan-500
  lime: "#84CC16", // lime-500
  rose: "#F43F5E", // rose-500
  
  white: "white",
  black: "#000000"
};

export const fontSizes = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem"
};

export const OnColors = {
  primary: "#FFFFFF", // text on blue
  secondary: "#FFFFFF", // text on slate
  success: "#FFFFFF", // text on green
  danger: "#FFFFFF", // text on red
  warning: "#111827", // text on amber
  info: "#FFFFFF", // text on sky
  light: "#111827", // text on gray-50
  dark: "#FFFFFF", // text on gray-900
  
  muted: "#111827", // muted bg thì text dark mới rõ
  indigo: "#FFFFFF",
  violet: "#FFFFFF",
  pink: "#FFFFFF",
  teal: "#FFFFFF",
  orange: "#111827", // cam sáng thì dùng chữ tối
  cyan: "#FFFFFF",
  lime: "#111827", // lime sáng → chữ tối
  rose: "#FFFFFF",
  
  white: "#111827", // chữ đen trên nền trắng
  black: "#FFFFFF" // chữ trắng trên nền đen
};

export const BorderRadius = {
  none: "0px",
  sm: "0.125rem", // 2px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  full: "9999px" // max (circle/pill)
};

export const defaultConfig = {
  spacings: SpacingsMap,
  colors: Colors,
  onColors: OnColors,
  borderRadius: BorderRadius,
  fontSizes,
  mainColors: {
    bg: Colors.white,
    text: OnColors.white,
    hover: "rgba(0,0,0,0.05)"
  }
};


const classMap: Record < string, string > = {
  "root": "root",
  "btn": "button",
  "btn-*": "button",
  "btn-icon": "button-icon",
  "btn-text-icon": "button-icon",
  "btn-outline-*": "button-outline",
  
  "accordion-*": "accordion",
  "accordion-group": "accordion-group",
  
  "form-input-group": "form-input",
  "form-input": "form-input",
  "form-check-group": "form-check",
  "form-check": "form-check",
  "form-radio-group": "form-radio",
  "form-radio": "form-radio",
  "form-file-group": "form-file",
  "form-file": "form-file",
  "form-select-group": "form-select",
  "form-select": "form-select",
  "form-label": "form-label",
  "form-text": "form-text",
  
  "table": "table",
  "table-*": "table",
  
  "card": "card",
  "card-*": "card",
  
  "navbar": "navbar",
  "navbar-*": "navbar",
  "navbar-menu": "navbar-menu",
  "navbar-menu-*": "navbar-menu",

  "offcanvas": "offcanvas",
  "offcanvas-*": "offcanvas",
  "offcanvas-menu": "offcanvas-menu",
  "offcanvas-menu-*": "offcanvas-menu",

  "menu": "menu",
  "menu-*": "menu",

  "list": "list",
  "list-*": "list",
  
  "heading-*": "heading",
  
  "border-*": "border",
  
  "p-*": "padding",
  "pb-*": "padding",
  "pt-*": "padding",
  "pl-*": "padding",
  "pr-*": "padding",
  "px-*": "padding",
  "py-*": "padding",
  
};

const patternList = Object.entries(classMap)
  .filter(([key]) => key.includes("*"))
  .map(([key, value]) => {
    const regexKey = key.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*");
    return { regex: new RegExp(`^${regexKey}$`), value };
  });

function matchClass(name: string): string {
  if (classMap[name]) return classMap[name];
  
  for (const { regex, value } of patternList) {
    if (regex.test(name)) return value;
  }
  
  return classMap["*"] || name;
}

function collapseArray < T > (arr: T[]): T[] {
  return Array.from(new Set(arr));
}


export const groups = collapseArray(Object.values(classMap));
export type Config = typeof defaultConfig;