export class Sidebar {
  constructor(public element: HTMLElement) {
    this.init();
  }

  private init() {
    const sidebarToggleBtns = this.element.querySelectorAll(
      '.sidebar-toggle-btn',
    );
    sidebarToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.toggle();
      });
    });

    const sidebarMenu = this.element.querySelector('.sidebar-menu');
    sidebarMenu?.addEventListener('click', ({ target }) => {
      const parentElement = (target as HTMLElement).parentElement;
      parentElement && parentElement.classList.toggle('open');
    });
  }

  private isPC() {
    return window.innerWidth >= 1024;
  }

  open() {
    if (this.isPC()) {
      this.element.classList.add('icon-only');
    } else {
      this.element.classList.add('open');
    }
  }

  close() {
    if (this.isPC()) {
      this.element.classList.remove('icon-only');
    } else {
      this.element.classList.remove('open');
    }
  }

  toggle() {
    if (this.isPC()) {
      this.element.classList.toggle('icon-only');
    } else {
      this.element.classList.toggle('open');
    }
  }
}
