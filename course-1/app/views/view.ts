export class View<T> {
  protected element: HTMLElement

  constructor(selector: string) {
    this.element = document.querySelector(selector)
  }

  public get getElement(): HTMLElement {
    return this.element
  }

  returnTemplate(model: T): string {
    const ERROR_MESSAGE = 'Subclass needs to override returnTemplate method'
    throw Error(ERROR_MESSAGE)
  }

  update(model: T): void {
    this.element.innerHTML = this.returnTemplate(model)
  }
}
