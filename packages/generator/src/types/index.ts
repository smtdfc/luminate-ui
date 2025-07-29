export type BaseColor = |
 'primary' |
 'secondary' |
 'info' |
 'success' |
 'warn' |
 'danger' |
 'dark' |
 'light';

export type TextOnColor = `on${Capitalize<BaseColor>}`;
export type AvailableColor = BaseColor | TextOnColor;
export type AvailableSpacing =
 | 'xs'
 | 'sm'
 | 'md'
 | 'lg'
 | 'xl'
 | '2xl'
 | '3xl';
 
