import { AvailableSpacing } from '../types/index.js';

const enabled: Record<string,boolean>={
  root:false,
  outlineVariant: true,
  variant:true,
  spacing:true
}

const padding: Record < AvailableSpacing, string > = {
  xs: '4px 8px',
  sm: '6px 12px',
  md: '8px 16px',
  lg: '12px 20px',
  xl: '16px 24px',
  '2xl': '20px 32px',
  '3xl': '24px 40px',
};

const buttonConfig = {
  padding,
  enabled
};

export default buttonConfig;