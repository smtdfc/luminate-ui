export class Offcanvas {
  public overlayElement: HTMLDivElement = document.createElement('div');

  constructor(public element: HTMLElement) {
    this.init();
    this.overlayElement.classList.add('offcanvas-overlay');
    document.body.appendChild(this.overlayElement);
  }

  private init() {
    const offcanvasToggleBtns = this.element.querySelectorAll(
      '.offcanvas-toggle-btn',
    );
    offcanvasToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.toggle();
      });
    });

    this.overlayElement.addEventListener('click', () => this.toggle());
    const offcanvasMenu = this.element.querySelector('.offcanvas-menu');
    offcanvasMenu?.addEventListener('click', ({ target }) => {
      const parentElement = (target as HTMLElement).parentElement;
      parentElement && parentElement.classList.toggle('open');
    });
  }

  open() {
    this.element.classList.add('open');
    this.overlayElement.classList.add('open');
  }

  close() {
    this.element.classList.remove('open');
    this.overlayElement.classList.remove('open');
  }

  toggle() {
    this.element.classList.toggle('open');
    this.overlayElement.classList.toggle('open');
  }
}
