export class Accordion {
  public header: HTMLElement;
  constructor(public element: HTMLElement) {
    this.header =
      element.querySelector('.accordion-header') ??
      document.createElement('span');
    this.init();
  }

  private init() {
    this.header.addEventListener('click', () => this.toggle());
  }

  open() {
    this.element.classList.add('active');
  }

  close() {
    this.element.classList.remove('active');
  }

  toggle() {
    if (this.element.classList.contains('active')) this.close();
    else this.open();
  }
}
