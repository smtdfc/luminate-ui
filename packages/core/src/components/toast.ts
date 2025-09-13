export interface ToastOptions {
  duration?: number;
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'bottom-center';
  level?: 'info' | 'success' | 'warning' | 'danger' | 'primary';
}

export class Toast {
  constructor(public element: HTMLElement, public options: ToastOptions = {}) {
    this.init();
  }

  private init() {
    const duration = this.options.duration ?? 5000;
    const position = this.options.position ?? 'top-right';
    const level = this.options.level ?? 'info';

    this.element.classList.add('toast-' + level);
    this.element.classList.add(position);

    this.element
      .querySelector('.toast-close-btn')
      ?.addEventListener('click', () => this.close());

    this.options.duration &&
      setInterval(() => {
        this.close();
      }, this.options.duration);
  }

  open() {
    this.element.classList.add('open');
    this.element.style.display = 'flex';
    this.element.style.animation = 'fadeIn 0.5s forwards';
    this.options.duration &&
      setInterval(() => {
        this.close();
      }, this.options.duration);
  }

  close() {
    this.element.classList.remove('open');
    this.element.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
      this.element.style.display = 'none';
    }, 500);
  }

  remove() {
    this.element.remove();
  }
}
