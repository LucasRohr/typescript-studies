import { NegotiationModel } from '../models/negotiation.js'
import { NegotiationsHandler } from '../models/negotiations-handler.js'
import { NegotiationsView, ToastMessageView } from '../views/index.js'

const NEGOTIATION_INPUT_IDS = Object.freeze({
  DATE: '#data',
  QUANTITY: '#quantidade',
  VALUE: '#valor',
})

const NEGOTIATIONS_VIEW_ID = '#negotiationsView'
const TOAST_MESSAGE_VIEW_ID = '#toastMessageView'

const TOAST_MESSAGE_TEXT = 'Negociação criada e incluida com sucesso!'

export class NegotiationController {
  private dateInput: HTMLInputElement
  private quantityInput: HTMLInputElement
  private valueInput: HTMLInputElement
  private negotiationsHandler: NegotiationsHandler = new NegotiationsHandler()
  private negotiationView: NegotiationsView = new NegotiationsView(
    NEGOTIATIONS_VIEW_ID
  )
  private toastMessageView: ToastMessageView = new ToastMessageView(
    TOAST_MESSAGE_VIEW_ID
  )

  constructor() {
    // Init class instance with DOM element values

    this.dateInput = document.querySelector(NEGOTIATION_INPUT_IDS.DATE)
    this.quantityInput = document.querySelector(NEGOTIATION_INPUT_IDS.QUANTITY)
    this.valueInput = document.querySelector(NEGOTIATION_INPUT_IDS.VALUE)

    this.negotiationView.update(this.negotiationsHandler)
  }

  add(): void {
    const negotiation = this.createNegotiation()

    this.negotiationsHandler.add(negotiation)
    this.negotiationView.update(this.negotiationsHandler)
    this.toastMessageView.update(TOAST_MESSAGE_TEXT)

    this.cleanForm()
  }

  createNegotiation(): NegotiationModel {
    const regExp = /-/g
    const date = new Date(this.dateInput.value.replace(regExp, ',')) // replace - for , with regex to parse date
    const value = parseFloat(this.valueInput.value)
    const quantity = parseInt(this.quantityInput.value)

    return new NegotiationModel(value, date, quantity)
  }

  cleanForm(): void {
    this.dateInput.value = ''
    this.valueInput.value = ''
    this.quantityInput.value = ''

    this.dateInput.focus()
  }
}
