import { CSSGenerator } from '../base/index.js';
import { defaultConfig, Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('navbar', (config: Config, generator: CSSGenerator) => {
    generator.addClass('navbar', {
      '--navbar-bg': 'var(--main-bg-color)',
      '--navbar-color': 'var(--main-text-color)',
      '--navbar-menu-item-color': 'var(--navbar-color)',
      '--navbar-menu-item-hover-color': 'var(--primary-color)',
      '--navbar-menu-item-hover-bg': 'var(--main-hover-color)',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      columnGap: '5px',
      background: 'var(--navbar-bg)!important',
      color: 'var(--navbar-color)',
      boxSizing: 'border-box',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      zIndex: '1000',
    });

    generator.addClass('navbar-header', {
      display: 'flex',
      alignItems: 'center',
      columnGap: '5px',
      background: 'var(--navbar-bg)',
      color: 'var(--navbar-color)',
      boxSizing: 'border-box',
    });

    generator.addClass('navbar-items', {
      display: 'flex',
      alignItems: 'center',
      columnGap: '5px',
      margin: '0 5px',
      background: 'var(--navbar-bg)',
      color: 'var(--navbar-color)',
      boxSizing: 'border-box',
      'margin-left': 'auto',
    });

    generator.addClass('navbar-btn', {
      margin: '0',
      fontSize: '20px',
    });

    generator.addMediaQuery('(min-width:48rem)', {
      '.navbar-header': {
        margin: '0 0.8rem',
      },
    });

    return generator.generate();
  });

  map.set('navbar-menu', (config: Config, generator: CSSGenerator) => {
    generator.addMediaQuery('(max-width:48rem)', {
      '.navbar-menu-container': {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'var(--navbar-bg)!important',
        color: 'var(--navbar-color)',
        boxSizing: 'border-box',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        zIndex: '1001',
        transform: 'translateX(-100%)',
        transition: 'ease 0.3s transform, ease 0.3s opacity',
        opacity: '0',
      },
      '.navbar.open .navbar-menu-container': {
        transform: 'translateX(0%)',
        opacity: '1',
      },
      '.navbar-menu': {
        listStyle: 'none',
        textDecoration: 'none',
        margin: '10px 0',
        padding: config.spacings.sm,
      },
      '.navbar-menu a': {
        listStyle: 'none',
        textDecoration: 'none',
        fontSize: '18px',
      },
      '.navbar-menu a>.state-icon': {
        marginLeft: 'auto',
        transition: 'ease 0.3s all',
      },
      '.navbar-menu li': {
        display: 'block',
      },
      '.navbar-menu li>a': {
        color: 'var(--navbar-menu-item-color)',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        transition: 'ease 0.3s all',
        borderRadius: config.borderRadius.lg,
      },
      '.navbar-menu li>a:hover>.state-icon': {
        transform: 'translateX(2px)',
      },
      '.navbar-menu li>a:hover': {
        color: 'var(--navbar-menu-item-hover-color)',
        background: 'var(--navbar-menu-item-hover-bg)',
      },
      '.navbar-menu li>ul': {
        margin: '0',
        padding: '0',
        fontSize: '16px!important',
        marginLeft: '1rem!important',
        display: 'none',
        opacity: '0',
      },
      '.navbar-menu li.open>ul': {
        display: 'block',
        opacity: '1',
      },
      '.navbar-menu li.open>a>.state-icon': {
        transform: 'rotate(-90deg)',
      },
      '.navbar-toggle-btn': {
        display: 'block',
      },
    });

    generator.addMediaQuery('(min-width:48rem)', {
      '.navbar-toggle-btn,.state-icon': {
        display: 'none',
      },
      '.navbar-menu-container': {
        marginLeft: 'auto',
        justifyContent: 'center',
      },
      '.navbar-menu': {
        display: 'flex',
        alignItems: 'center',
        columnGap: '20px',
        listStyle: 'none',
        textDecoration: 'none',
        padding: config.spacings.md,
        margin: '0 !important',
      },
      '.navbar-menu a': {
        listStyle: 'none',
        textDecoration: 'none',
        fontSize: '18px',
      },
      '.navbar-menu li>a': {
        color: 'var(--navbar-menu-item-color)',
        display: 'flex',
        padding: '0.5rem',
        alignItems: 'center',
        transition: 'ease 0.3s all',
        borderBottom: 'solid 2px transparent',
      },
      '.navbar-menu>li>a:hover': {
        borderBottom: 'solid 2px var(--navbar-menu-item-hover-color)',
      },
      '.navbar-menu li>ul': {
        display: 'none',
        opacity: '0',
        listStyle: 'none',
        position: 'absolute',
        margin: '0!important',
        padding: config.spacings.md,
        borderRadius: config.spacings.md,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        background: 'var(--navbar-bg)',
        minWidth: '250px',
      },
      // '.navbar-menu li:hover>ul': {
      //   display: 'block',
      //   opacity: '1',
      // },
      '.navbar-menu li.open>ul': {
        display: 'block',
        opacity: '1',
      },
      '.navbar-menu li>ul>li>a': {
        fontSize: '16px!important',
        border: 'none!important',
        borderRadius: config.borderRadius.md,
      },
      '.navbar-menu li>ul>li>a:hover': {
        color: 'var(--navbar-menu-item-hover-color)',
        background: 'var(--navbar-menu-item-hover-bg)',
      },
    });
    return generator.generate();
  });
}
