import { NegotiationsHandler } from '../models/negotiations-handler.js'

export class NegotiationsView {
  private element: HTMLElement

  constructor(selector: string) {
    this.element = document.querySelector(selector)
  }

  returnTableBodyList(negotiationsHandler: NegotiationsHandler): string {
    return negotiationsHandler
      .getNegotiations()
      .map(
        (negotiation) =>
          `<tr>
                <th>${negotiation.date.toLocaleDateString()}</th>
                <th>${negotiation.quantity}</th>
                <th>${negotiation.value}</th>
            </tr>`
      )
      .join('')
  }

  returnTableTemplate(negotiationsHandler: NegotiationsHandler): string {
    // Alternate date format solution: new Intl.DateTimeFormat().format(negotiation.date)
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    ${this.returnTableBodyList(negotiationsHandler)}
                </tbody>
            </table>
        `
  }

  update(negotiationsHandler: NegotiationsHandler): void {
    this.element.innerHTML = this.returnTableTemplate(negotiationsHandler)
  }
}
