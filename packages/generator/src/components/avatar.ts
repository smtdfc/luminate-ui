import { CSSGenerator } from '../base/index.js';
import { Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('avatar', (_config: Config, generator: CSSGenerator) => {
    // base avatar
    generator.addClass('avatar', {
      display: 'inline-block',
      'border-radius': '9999px',
      'object-fit': 'cover',
    });

    // sizes
    generator.addClass('avatar-sm', {
      width: '24px',
      height: '24px',
    });

    generator.addClass('avatar-md', {
      width: '40px',
      height: '40px',
    });

    generator.addClass('avatar-lg', {
      width: '64px',
      height: '64px',
    });

    generator.addClass('avatar-xl', {
      width: '80px',
      height: '80px',
    });

    generator.addClass('avatar-2xl', {
      width: '96px',
      height: '96px',
    });

    generator.addClass('avatar-container', {
      display: 'flex',
      alignItems: 'center',
      columnGap: '10px',
    });

    generator.addClass('avatar-text', {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1px',
    });

    return generator.generate();
  });
}
