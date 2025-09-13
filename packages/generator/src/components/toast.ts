import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('toast', (config: Config, generator: CSSGenerator) => {
    generator.addClass('toast', {
      '--toast-bg': 'var(--main-bg-color)',
      '--toast-color': 'var(--main-text-color)',

      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      minWidth: '300px',
      maxWidth: '400px',
      backgroundColor: 'var(--toast-bg)',
      color: 'var(--toast-color)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      overflow: 'hidden',
      display: 'none',
      flexDirection: 'column',
      zIndex: '1000',
    });

    generator.query('.toast.top-left', {
      top: '1rem',
      left: '1rem',
      bottom: 'auto',
      right: 'auto',
    });

    generator.query('.toast.top-right', {
      top: '1rem',
      right: '1rem',
      bottom: 'auto',
      left: 'auto',
    });

    generator.query('.toast.bottom-left', {
      bottom: '1rem',
      left: '1rem',
      top: 'auto',
      right: 'auto',
    });

    generator.query('.toast.bottom-right', {
      bottom: '1rem',
      right: '1rem',
      top: 'auto',
      left: 'auto',
    });

    generator.query('.toast.top-center', {
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 'auto',
      right: 'auto',
    });

    generator.query('.toast.bottom-center', {
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 'auto',
      right: 'auto',
    });

    generator.query('.toast.show', {
      display: 'flex',
      animation: 'fadeIn 0.5s forwards',
    });

    generator.query('.toast-header', {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem 1rem',
      backgroundColor: 'var(--toast-bg)',
    });

    generator.query('.toast-title', {
      fontWeight: 'bold',
      fontSize: '1rem',
      color: 'var(--toast-color)',
    });

    generator.query('.toast-body', {
      padding: '1rem',
      fontSize: '0.875rem',
      backgroundColor: 'var(--toast-bg)',
      color: 'var(--toast-color)',
    });

    generator.query('.toast-close-btn', {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '0',
      color: 'var(--toast-color)',
    });

    generator.query('.toast-close-btn:hover', {
      background: 'var(--main-hover-color)',
    });

    generator.addKeyframes('fadeIn', {
      from: {
        opacity: '0',
        transform: 'translateY(20px)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    });

    generator.addKeyframes('fadeOut', {
      from: {
        opacity: '1',
        transform: 'translateY(0)',
      },
      to: {
        opacity: '0',
        transform: 'translateY(20px)',
      },
    });

    const levels = ['info', 'success', 'warning', 'danger', 'primary'];
    levels.forEach((level) => {
      generator.addClass(`toast-${level}`, {
        '--toast-bg': `var(--${level}-color)`,
        '--toast-color': `var(--on-${level}-color)`,
      });
    });

    return generator.generate();
  });
}
