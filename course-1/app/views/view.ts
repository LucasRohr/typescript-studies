export abstract class View<T> {
  protected element: HTMLElement
  private sanitize: boolean = false

  constructor(selector: string, sanitize?: boolean) {
    this.element = document.querySelector(selector)
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
      this.element.innerHTML = template.replace(
        /<script>[\s\S]*?<\/script>/,
        ''
      )
    } else {
      this.element.innerHTML = template
    }
  }
}
