export abstract class View<T> {
  protected element: HTMLElement
  private sanitize: boolean = false

  constructor(selector: string, sanitize?: boolean) {
    const selectorElement = document.querySelector(selector)

    if (selectorElement) {
      this.element = selectorElement as HTMLElement
    } else {
      const errorMessage = `Selector ${selector} is invalid, please verify the element`
      throw new Error(errorMessage)
    }

    this.sanitize = sanitize ?? false
  }

  public get getElement(): HTMLElement {
    return this.element
  }

  // Force returnTemplate implementation on subclasses
  protected abstract returnTemplate(model: T): string

  public update(model: T): void {
    const template = this.returnTemplate(model)

    if (this.sanitize) {
      this.element.innerHTML = template.replace(/<script>[\s\S]*?<\/script>/, '')
    } else {
      this.element.innerHTML = template
    }
  }
}
