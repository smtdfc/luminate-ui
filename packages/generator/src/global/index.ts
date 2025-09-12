import { CSSGenerator, CSSProperties } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('root', (config: Config, generator: CSSGenerator) => {
    let colors = Object.keys(config.colors);
    let onColors = Object.keys(config.onColors);
    let mainColors = Object.keys(config.mainColors);

    const colorVars = colors.reduce((acc, key) => {
      acc[`--${key}-color`] = config.colors[key as keyof typeof config.colors];
      return acc;
    }, {} as CSSProperties);

    const onColorVars = onColors.reduce((acc, key) => {
      acc[`--on-${key}-color`] =
        config.onColors[key as keyof typeof config.onColors];
      return acc;
    }, {} as CSSProperties);

    const mainColorVars = mainColors.reduce((acc, key) => {
      acc[`--main-${key}-color`] =
        config.mainColors[key as keyof typeof config.mainColors];
      return acc;
    }, {} as CSSProperties);

    generator.query(':root', {
      ...colorVars,
      ...onColorVars,
      ...mainColorVars,
      '-webkit-tap-highlight-color': 'transparent',
      'scrollbar-width': 'thin',
      'scrollbar-color':
        'var(--main-scrollbar-thumb-color) var(--main-scrollbar-track-color)',
      background: 'var(--main-bg-color)',
      color: 'var(--main-text-color)',
      'font-family': 'aria, sans-serif',
      'box-sizing': 'border-box',
    });

    return generator.generate();
  });
}
