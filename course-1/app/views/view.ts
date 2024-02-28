export abstract class View<T> {
  protected element: HTMLElement

  constructor(selector: string) {
    this.element = document.querySelector(selector)
  }

  public get getElement(): HTMLElement {
    return this.element
  }

  // Force returnTemplate implementation on subclasses
  protected abstract returnTemplate(model: T): string

  public update(model: T): void {
    this.element.innerHTML = this.returnTemplate(model)
  }
}
