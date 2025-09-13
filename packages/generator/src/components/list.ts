import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('list', (config: Config, generator: CSSGenerator) => {
    generator.addClass('list', {
      '--list-bg': 'var(--main-bg-color)',
      '--list-item-color': 'var(--main-text-color)',
      listStyle: 'none',
      padding: '0',
      margin: '0.5rem',
      background: 'var(--list-bg)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    });

    generator.query('.list li', {
      display: 'flex',
      alignItems: 'center',
      columnGap: '10px',
      padding: '1rem',
      color: 'var(--list-item-color)',
      transition: 'background 0.3s ease',
    });

    generator.query('.list li > .opt-btn', {
      margin: '0 !important',
      marginLeft: 'auto !important',
      fontSize: '18px !important',
    });

    generator.query('.list li:first-child', {
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
    });

    generator.query('.list li:last-child', {
      borderBottomRightRadius: '10px',
      borderBottomLeftRadius: '10px',
    });

    generator.query('.list li:hover', {
      background: 'var(--main-hover-color)',
    });

    return generator.generate();
  });
}
