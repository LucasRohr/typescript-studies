export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLElement | null = null

    const getter = function () {
      if (!element) {
        console.log(`getting ${selector}`)

        element = document.querySelector(selector)
      }

      return element
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
    })
  }
}
