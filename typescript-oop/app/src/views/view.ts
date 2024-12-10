export abstract class View<T> {
  protected element: HTMLElement

  constructor(selector: string) {
    const selectorElement = document.querySelector(selector)

    if (selectorElement) {
      this.element = selectorElement as HTMLElement
    } else {
      const errorMessage = `Selector ${selector} is invalid, please verify the element`
      throw new Error(errorMessage)
    }
  }

  public get getElement(): HTMLElement {
    return this.element
  }

  // Force returnTemplate implementation on subclasses
  protected abstract returnTemplate(model: T): string

  public update(model: T): void {
    const template = this.returnTemplate(model)

    this.element.innerHTML = template
  }
}
