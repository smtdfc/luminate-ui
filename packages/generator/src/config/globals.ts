import {
  BaseColor,
  TextOnColor,
  AvailableColor,
  AvailableSpacing
} from '../types/index.js';

const colorTokens: Record < AvailableColor, string > = {
  primary: '#6C9FFB',
  secondary: '#B4C5D4',
  info: '#80D8FF', 
  success: '#8CE99A', 
  warn: '#FFE066', 
  danger: '#FF8787',
  light: '#F8F9FA', 
  dark: '#343A40', 
  
  onPrimary: '#FFFFFF',
  onSecondary: '#212529',
  onInfo: '#00334C',
  onSuccess: '#0A3622',
  onWarn: '#664D03',
  onDanger: '#5C1A1A',
  onLight: '#212529',
  onDark: '#FFFFFF',
};

const baseColors: BaseColor[] = Object.keys(colorTokens).filter(v => !v.startsWith("on")) as BaseColor[];
const textColors: TextOnColor[] = baseColors.map(c => `on${c.charAt(0).toUpperCase()}${c.slice(1)}` as TextOnColor);
const allColors: AvailableColor[] = [...baseColors, ...textColors];

const spacingTokens:Record< AvailableSpacing , string>= {
 xs: '4px',
 sm: '8px',
 md: '16px',
 lg: '24px',
 xl: '32px',
 '2xl': '40px',
 '3xl': '48px',
};
const spacings: AvailableSpacing[] = Object.keys(spacingTokens) as AvailableSpacing[];


const globalsConfig = {
  colorTokens,
  baseColors,    
  textColors,   
  allColors,
  spacings,
  spacingTokens
};

export default globalsConfig;