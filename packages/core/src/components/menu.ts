export class Menu {
  constructor(public element: HTMLElement) {
    this.init();
  }

  private init() {
    this.element?.addEventListener('click', ({ target }) => {
      const parentElement = (target as HTMLElement).parentElement;
      parentElement && parentElement.classList.toggle('open');
    });
  }
}
