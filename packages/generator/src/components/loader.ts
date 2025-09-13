import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('loader', (config: Config, generator: CSSGenerator) => {
    // ---------- Line Loader ----------
    generator.addClass('line-loader', {
      '--loader-color': 'var(--primary-color)', // dùng biến CSS
      width: '100%',
      height: '3px',
      background: 'rgba(0,0,0,0.1)',
      overflow: 'hidden',
      position: 'relative',
    });

    generator.query('.line-loader::before, .line-loader::after', {
      content: "''",
      position: 'absolute',
      top: '0',
      height: '100%',
      background: 'var(--loader-color)',
      willChange: 'transform',
    });

    generator.query('.line-loader::before', {
      animation: 'line-anim1 2s cubic-bezier(0.65,0.815,0.735,0.395) infinite',
    });

    generator.query('.line-loader::after', {
      animation: 'line-anim2 2s cubic-bezier(0.165,0.84,0.44,1) infinite',
      animationDelay: '1.5s',
    });

    // ---------- Spin Loader ----------
    generator.addClass('spin-loader', {
      '--loader-color': 'var(--primary-color)',
      border: '5px solid rgba(0,0,0,0.05)',
      borderTop: '5px solid var(--loader-color)',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 2s linear infinite',
      margin: '20px auto',
      display: 'block',
    });

    // ---------- Dot Loader ----------
    generator.addClass('dot-loader', {
      '--loader-color': 'var(--primary-color)',
      display: 'flex',
      justifyContent: 'space-between',
      width: '80px',
      height: '24px',
      margin: '20px auto',
    });

    generator.query('.dot-loader div', {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: 'var(--loader-color)',
      animationTimingFunction: 'cubic-bezier(0,1,1,0)',
    });

    generator.query('.dot-loader div:nth-child(1)', {
      animation: 'dot1 0.6s infinite',
    });
    generator.query('.dot-loader div:nth-child(2)', {
      animation: 'dot2 0.6s infinite',
    });
    generator.query('.dot-loader div:nth-child(3)', {
      animation: 'dot2 0.6s infinite',
    });
    generator.query('.dot-loader div:nth-child(4)', {
      animation: 'dot3 0.6s infinite',
    });

    // ---------- Animations ----------
    generator.addKeyframes('spin', {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    });
    generator.addKeyframes('dot1', {
      '0%': { transform: 'scale(0)' },
      '100%': { transform: 'scale(1)' },
    });
    generator.addKeyframes('dot2', {
      '0%': { transform: 'translate(0,0)' },
      '100%': { transform: 'translate(24px,0)' },
    });
    generator.addKeyframes('dot3', {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(0)' },
    });
    generator.addKeyframes('line-anim1', {
      '0%': { left: '-35%', right: '100%' },
      '60%': { left: '100%', right: '-90%' },
      '100%': { left: '100%', right: '-90%' },
    });
    generator.addKeyframes('line-anim2', {
      '0%': { left: '-200%', right: '100%' },
      '60%': { left: '107%', right: '-8%' },
      '100%': { left: '107%', right: '-8%' },
    });

    return generator.generate();
  });
}
