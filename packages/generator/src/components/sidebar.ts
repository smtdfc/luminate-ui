import { CSSGenerator } from '../base/index.js';
import { Config } from '../config/index.js';
import { GeneratorMap } from '../types/index.js';

export default function (map: GeneratorMap) {
  map.set('sidebar', (config: Config, generator: CSSGenerator) => {
    // Container
    generator.addClass('sidebar-container', {
      display: 'flex',
      flexDirection: 'row',
      maxHeight: '100vh',
    });

    // Sidebar
    generator.addClass('sidebar', {
      '--sidebar-bg': 'var(--main-bg-color)',
      '--sidebar-color': 'var(--main-text-color)',
      '--sidebar-menu-item-color': 'var(--main-text-color)',
      '--sidebar-menu-item-hover-color': 'var(--primary-color)',
      '--sidebar-menu-item-hover-bg': 'var(--main-hover-color)',
      background: 'var(--sidebar-bg)',
      color: 'var(--sidebar-color)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      zIndex: '1002',
      borderLeft: '1px solid #eee',
      transition: 'transform 0.5s ease, opacity 0.5s ease',
    });

    generator.addClass('sidebar-header', {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      borderBottom: '1px solid #eee',
      background: 'var(--sidebar-bg)',
      color: 'var(--sidebar-color)',
    });

    generator.addClass('sidebar-title', {
      fontSize: '1.25rem',
      fontWeight: 'normal',
      margin: '0',
    });

    generator.addClass('sidebar-body', {
      flex: '1',
      padding: '1rem',
      overflowY: 'auto',
      background: 'var(--sidebar-bg)',
      color: 'var(--sidebar-color)',
    });

    generator.addClass('sidebar-footer', {
      padding: '1rem',
      borderTop: '1px solid #eee',
      background: 'var(--sidebar-bg)',
      color: 'var(--sidebar-color)',
    });

    generator.addClass('sidebar.open', {
      transform: 'translateX(0%)',
      opacity: '1',
    });

    generator.addClass('sidebar-overlay', {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.19)',
      backdropFilter: 'blur(8px)',
      opacity: '0',
      display: 'none',
      transition: 'opacity 0.3s ease',
      zIndex: '1001',
    });

    generator.addClass('sidebar-overlay.open', {
      display: 'block',
      opacity: '1',
    });

    generator.addClass('sidebar-menu', {
      listStyle: 'none',
      padding: '0',
    });

    generator.query('.sidebar-menu a', {
      textDecoration: 'none',
    });

    generator.query('.sidebar-menu li > a', {
      borderRadius: '10px',
      padding: '0.8rem',
      color: 'var(--sidebar-menu-item-color)',
      display: 'flex',
      alignItems: 'center',
      columnGap: '10px',
      transition: 'all 0.2s ease',
      fontSize: '16px',
      lineHeight: '1',
    });

    generator.query('.sidebar-menu li > a > span', {
      fontSize: '16px',
      lineHeight: '1',
    });

    generator.query('.sidebar-menu .state-icon', {
      marginLeft: 'auto',
      fontSize: '18px',
      transition: 'transform 0.2s ease',
      display: 'block !important',
      pointerEvents: 'none',
    });

    generator.query('.sidebar-menu .icon', {
      fontSize: '20px',
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1',
      pointerEvents: 'none',
    });

    generator.query('.sidebar-menu li > a:hover', {
      color: 'var(--sidebar-menu-item-hover-color)',
      background: 'var(--sidebar-menu-item-hover-bg)',
    });

    generator.query('.sidebar-menu li > ul', {
      display: 'none',
      margin: '3px 0 3px 20px',
      padding: '0 0 0 5px',
      listStyle: 'none',
      borderLeft: 'solid 1px rgba(0,0,0,0.15)',
    });

    generator.query('.sidebar-menu li.open > ul', {
      display: 'block',
    });

    generator.query('.sidebar-menu li > a:hover > .state-icon', {
      transform: 'translateX(2px)',
    });

    generator.query('.sidebar-menu li.open > a > .state-icon', {
      transform: 'rotate(-90deg)',
    });

    generator.query('.sidebar-container .container', {
      maxHeight: '100vh',
      overflowY: 'scroll',
    });

    generator.query('.sidebar.icon-only', {
      minWidth: '4rem !important',
      width: '4rem',
    });

    generator.query('.sidebar.icon-only .sidebar-body', {
      padding: '1rem 0 !important',
    });

    generator.query(
      '.sidebar.icon-only .sidebar-title, .sidebar.icon-only .sidebar-body li > a span:not(.icon), .sidebar.icon-only .avatar-text',
      {
        display: 'none',
      },
    );

    generator.query('.sidebar.icon-only .sidebar-body li > a', {
      justifyContent: 'center',
      padding: '0.8rem 0',
      borderRadius: '0',
    });

    generator.query('.sidebar.icon-only .sidebar-body li > a .icon', {
      fontSize: '22px',
    });

    generator.query('.sidebar.icon-only .sidebar-body li > a:hover', {
      background: 'var(--sidebar-menu-item-hover-bg)',
      color: 'var(--sidebar-menu-item-hover-color)',
    });

    generator.addClass('sidebar-toggle-btn', {
      margin: 0,
    });

    // Media Queries
    generator.addMediaQuery('(max-width: 48rem)', {
      '.sidebar': {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '85vw',
        transform: 'translateX(-100%)',
      },
      '.sidebar.open': {
        transform: 'translateX(0)',
      },
    });

    generator.addMediaQuery('(min-width: 48rem) and (max-width: 69.99rem)', {
      '.sidebar': {
        position: 'relative',
        width: '40vw',
        transform: 'none',
      },
    });

    generator.addMediaQuery('(min-width: 70rem) and (max-width: 79.99rem)', {
      '.sidebar': {
        width: '35vw',
      },
    });

    generator.addMediaQuery('(min-width: 80rem)', {
      '.sidebar': {
        width: '30vw',
        maxWidth: '320px',
      },
    });

    return generator.generate();
  });
}
