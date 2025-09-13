import { createPopper } from '@popperjs/core';

export class Navbar {
  private mq: MediaQueryList;
  private handleChange: (e: MediaQueryListEvent | MediaQueryList) => void;

  constructor(public element: HTMLElement) {
    this.mq = window.matchMedia('(max-width: 48rem)');
    this.handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        this.destroyDesktopDropdowns();
      } else {
        this.initDesktopDropdowns();
      }
    };
    this.init();
  }

  private init() {
    const navbarToggleBtns =
      this.element.querySelectorAll('.navbar-toggle-btn');
    navbarToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.element.classList.toggle('open');
      });
    });

    const navbarMenu = this.element.querySelector('.navbar-menu');
    navbarMenu?.addEventListener('click', ({ target }) => {
      const parentElement = (target as HTMLElement).parentElement;
      parentElement && parentElement.classList.toggle('open');
    });

    this.mq.addEventListener('change', this.handleChange);
    this.handleChange(this.mq);
  }

  private initDesktopDropdowns() {
    const navSubMenus = this.element.querySelectorAll('.navbar-submenu');

    navSubMenus.forEach((dropdown) => {
      const dropdownEle = dropdown as HTMLElement;
      const reference = dropdownEle.parentElement;
      if (!reference) return;

      let popperInstance: ReturnType<typeof createPopper> | null = null;

      const show = () => {
        if (popperInstance) popperInstance.destroy();

        popperInstance = createPopper(reference, dropdownEle, {
          placement: 'bottom-start',
          modifiers: [
            {
              name: 'offset',
              options: { offset: [0, 4] },
            },
            {
              name: 'flip',
              options: {
                fallbackPlacements: ['top-start', 'bottom-end', 'top-end'],
                padding: 8,
              },
            },
            {
              name: 'preventOverflow',
              options: { padding: 8 },
            },
          ],
        });

        // dropdownEle.style.display = 'block';
      };

      const hide = () => {
        if (popperInstance) {
          popperInstance.destroy();
          popperInstance = null;
        }
        //dropdownEle.style.display = 'none';
      };

      reference.addEventListener('mouseenter', show);
      reference.addEventListener('mouseleave', hide);

      (dropdownEle as any).__navHandlers = {
        show,
        hide,
        reference,
        popperInstance,
      };
    });
  }

  private destroyDesktopDropdowns() {
    const navSubMenus = this.element.querySelectorAll('.navbar-submenu');
    navSubMenus.forEach((dropdown) => {
      const dropdownEle = dropdown as HTMLElement;
      const handlers = (dropdownEle as any).__navHandlers;
      if (handlers) {
        handlers.reference.removeEventListener('mouseenter', handlers.show);
        handlers.reference.removeEventListener('mouseleave', handlers.hide);
        if (handlers.popperInstance) {
          handlers.popperInstance.destroy();
        }
        // dropdownEle.style.display = 'none';
        delete (dropdownEle as any).__navHandlers;
      }
    });
  }

  open() {
    this.element.classList.add('open');
  }

  close() {
    this.element.classList.remove('open');
  }

  toggle() {
    this.element.classList.toggle('open');
  }

  private destroy() {
    this.mq.removeEventListener('change', this.handleChange);
    this.destroyDesktopDropdowns();
  }
}
