export const Spacings = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export const SpacingsMap = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
};

export const Colors = {
  primary: '#3B82F6', // blue-500
  secondary: '#64748B', // slate-500
  success: '#22C55E', // green-500
  danger: '#EF4444', // red-500
  warning: '#F59E0B', // amber-500
  info: '#0EA5E9', // sky-500
  light: '#F9FAFB', // gray-50
  dark: '#111827', // gray-900

  // extra accents
  muted: '#9CA3AF', // gray-400
  indigo: '#6366F1', // indigo-500
  violet: '#8B5CF6', // violet-500
  pink: '#EC4899', // pink-500
  teal: '#14B8A6', // teal-500
  orange: '#FB923C', // orange-400
  cyan: '#06B6D4', // cyan-500
  lime: '#84CC16', // lime-500
  rose: '#F43F5E', // rose-500

  white: 'white',
  black: '#000000',

  primaryTrans: 'rgba(59, 130, 246, 0.1)', // blue-500 10%
  secondaryTrans: 'rgba(100, 116, 139, 0.1)', // slate-500 10%
  successTrans: 'rgba(34, 197, 94, 0.1)', // green-500 10%
  dangerTrans: 'rgba(239, 68, 68, 0.1)', // red-500 10%
  warningTrans: 'rgba(245, 158, 11, 0.1)', // amber-500 10%
  infoTrans: 'rgba(14, 165, 233, 0.1)', // sky-500 10%
  lightTrans: 'rgba(249, 250, 251, 0.1)', // gray-50 10%
  darkTrans: 'rgba(17, 24, 39, 0.1)', // gray-900 10%

  mutedTrans: 'rgba(156, 163, 175, 0.1)', // gray-400 10%
  indigoTrans: 'rgba(99, 102, 241, 0.1)', // indigo-500 10%
  violetTrans: 'rgba(139, 92, 246, 0.1)', // violet-500 10%
  pinkTrans: 'rgba(236, 72, 153, 0.1)', // pink-500 10%
  tealTrans: 'rgba(20, 184, 166, 0.1)', // teal-500 10%
  orangeTrans: 'rgba(251, 146, 60, 0.1)', // orange-400 10%
  cyanTrans: 'rgba(6, 182, 212, 0.1)', // cyan-500 10%
  limeTrans: 'rgba(132, 204, 22, 0.1)', // lime-500 10%
  roseTrans: 'rgba(244, 63, 94, 0.1)', // rose-500 10%
};

export const fontSizes = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
};

export const OnColors = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF', // text on green
  success: '#FFFFFF',
  danger: '#FFFFFF', // text on red
  warning: '#111827', // text on amber
  info: '#FFFFFF', // text on sky
  light: '#111827', // text on gray-50
  dark: '#FFFFFF', // text on gray-900

  muted: '#111827', // muted bg
  indigo: '#FFFFFF',
  violet: '#FFFFFF',
  pink: '#FFFFFF',
  teal: '#FFFFFF',
  orange: '#111827', // text on orange
  cyan: '#FFFFFF',
  lime: '#111827', // text on lime
  rose: '#FFFFFF',

  white: '#111827',
  black: '#FFFFFF',

  primaryTrans: '#3B82F6', // blue-500
  secondaryTrans: '#64748B', // slate-500
  successTrans: '#22C55E', // green-500
  dangerTrans: '#EF4444', // red-500
  warningTrans: '#F59E0B', // amber-500
  infoTrans: '#0EA5E9',
  lightTrans: '#F9FAFB', // gray-50
  darkTrans: '#111827', // gray-900

  mutedTrans: '#9CA3AF', // gray-400
  indigoTrans: '#6366F1', // indigo-500
  violetTrans: '#8B5CF6', // violet-500
  pinkTrans: '#EC4899', // pink-500
  tealTrans: '#14B8A6', // teal-500
  orangeTrans: '#FB923C', // orange-400
  cyanTrans: '#06B6D4', // cyan-500
  limeTrans: '#84CC16', // lime-500
  roseTrans: '#F43F5E', // rose-500
};

export const BorderRadius = {
  none: '0px',
  sm: '0.125rem', // 2px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  full: '9999px', // max (circle/pill)
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
    hover: 'rgba(0,0,0,0.05)',
  },
};

const classMap: Record<string, string> = {
  root: 'root',
  btn: 'button',
  'btn-*': 'button',
  'btn-icon': 'button-icon',
  'btn-text-icon': 'button-icon',
  'btn-outline-*': 'button-outline',

  'accordion-*': 'accordion',
  'accordion-group': 'accordion-group',

  'form-input-group': 'form-input',
  'form-input': 'form-input',
  'form-check-group': 'form-check',
  'form-check': 'form-check',
  'form-radio-group': 'form-radio',
  'form-radio': 'form-radio',
  'form-file-group': 'form-file',
  'form-file': 'form-file',
  'form-select-group': 'form-select',
  'form-select': 'form-select',
  'form-label': 'form-label',
  'form-text': 'form-text',

  table: 'table',
  'table-*': 'table',

  card: 'card',
  'card-*': 'card',

  navbar: 'navbar',
  'navbar-*': 'navbar',
  'navbar-menu': 'navbar-menu',
  'navbar-menu-*': 'navbar-menu',

  offcanvas: 'offcanvas',
  'offcanvas-*': 'offcanvas',
  'offcanvas-menu': 'offcanvas-menu',
  'offcanvas-menu-*': 'offcanvas-menu',

  menu: 'menu',
  'menu-*': 'menu',

  list: 'list',
  'list-*': 'list',

  toast: 'toast',
  'toast-*': 'toast',

  loader: 'loader',
  'loader-*': 'loader',
  'spin-loader': 'loader',
  'dot-loader': 'loader',
  'line-loader': 'loader',

  badge: 'badge',
  'badge-*': 'badge',

  avatar: 'avatar',
  'avatar-*': 'avatar',

  container: 'container',
  'container-*': 'container',

  sidebar: 'sidebar',
  'sidebar-*': 'sidebar',

  'heading-*': 'heading',

  'border-*': 'border',

  'm-*': 'margin',
  'mb-*': 'margin',
  'mt-*': 'margin',
  'ml-*': 'margin',
  'mr-*': 'margin',
  'mx-*': 'margin',
  'my-*': 'margin',
  'p-*': 'padding',
  'pb-*': 'padding',
  'pt-*': 'padding',
  'pl-*': 'padding',
  'pr-*': 'padding',
  'px-*': 'padding',
  'py-*': 'padding',
};

const patternList = Object.entries(classMap)
  .filter(([key]) => key.includes('*'))
  .map(([key, value]) => {
    const regexKey = key
      .replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&')
      .replace(/\*/g, '.*');
    return { regex: new RegExp(`^${regexKey}$`), value };
  });

export function matchClass(name: string): string {
  if (classMap[name]) return classMap[name];

  for (const { regex, value } of patternList) {
    if (regex.test(name)) return value;
  }

  return classMap['*'] || name;
}

export function collapseArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export const groups = collapseArray(Object.values(classMap));
export type Config = typeof defaultConfig;
