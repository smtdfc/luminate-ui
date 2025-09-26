import { CSSGenerator } from '../base/index.js';
import { Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('container', (_config: Config, generator: CSSGenerator) => {
    generator.addClass('container', {
      width: '100%',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-left': '0.75rem',
      'padding-right': '0.75rem',
    });

    generator.addClass('container-responsive', {});

    generator.addMediaQuery('@media (min-width: 576px)', {
      '.container-responsive': { 'max-width': '540px' },
    });

    generator.addMediaQuery('@media (min-width: 768px)', {
      '.container-responsive': { 'max-width': '720px' },
    });

    generator.addMediaQuery('@media (min-width: 992px)', {
      '.container-responsive': { 'max-width': '960px' },
    });

    generator.addMediaQuery('@media (min-width: 1200px)', {
      '.container-responsive': { 'max-width': '1140px' },
    });

    generator.addMediaQuery('@media (min-width: 1400px)', {
      '.container-responsive': { 'max-width': '1320px' },
    });

    generator.addClass('container-fluid', {
      width: '100%',
      'max-width': '100%',
    });

    generator.addClass('container-fixed', {
      'max-width': '1200px',
    });

    return generator.generate();
  });
}
