import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config, fontSizes } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('badge', (config: Config, generator: CSSGenerator) => {
    generator.addClass('badge', {
      '--badge-bg': 'var(--primary-color)',
      '--badge-color': 'var(--on-primary-color)',
      background: 'var(--badge-bg)',
      color: 'var(--badge-color)',
      padding: '0.2rem 0.3rem',
      borderRadius: '20px',
      fontSize: '12px',
    });

    Object.keys(config.colors).forEach((colorName) => {
      generator.addClass(`badge-${colorName}`, {
        '--badge-bg': `var(--${colorName}-color)`,
        '--badge-color': `var(--on-${colorName}-color)`,
      });
    });

    return generator.generate();
  });
}
