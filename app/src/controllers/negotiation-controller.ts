import { domInjector, inspect, performanceLog } from '../decorators/index.js'
import { NegotiationModel } from '../models/negotiation.js'
import { NegotiationsHandler } from '../models/negotiations-handler.js'
import { NegotiationsDataService } from '../services/index.js'
import { DateUtils } from '../utils/index.js'
import { NegotiationsView, ToastMessageView } from '../views/index.js'

const NEGOTIATION_INPUT_IDS = Object.freeze({
  DATE: '#data',
  QUANTITY: '#quantidade',
  VALUE: '#valor',
})

const NEGOTIATIONS_VIEW_ID = '#negotiationsView'
const TOAST_MESSAGE_VIEW_ID = '#toastMessageView'

const TOAST_MESSAGE_TEXT = 'Negociação criada e incluida com sucesso!'
const TOAST_WEEK_DAY_ERROR_TEXT = 'A data informada deve ser um dia útil!'

const GET_NEGOTIATIONS_DATA_PATH = '/dados'

export class NegotiationController {
  // Init class properties with DOM element values using decorators

  @domInjector(NEGOTIATION_INPUT_IDS.DATE)
  private dateInput: HTMLInputElement

  @domInjector(NEGOTIATION_INPUT_IDS.QUANTITY)
  private quantityInput: HTMLInputElement

  @domInjector(NEGOTIATION_INPUT_IDS.VALUE)
  private valueInput: HTMLInputElement

  private negotiationsHandler: NegotiationsHandler = new NegotiationsHandler()
  private negotiationView: NegotiationsView = new NegotiationsView(NEGOTIATIONS_VIEW_ID)
  private toastMessageView: ToastMessageView = new ToastMessageView(TOAST_MESSAGE_VIEW_ID)

  private negotiationsDataService: NegotiationsDataService = new NegotiationsDataService(
    GET_NEGOTIATIONS_DATA_PATH
  )

  constructor() {
    this.negotiationView.update(this.negotiationsHandler)
  }

  @inspect()
  @performanceLog()
  public add(): void {
    const negotiation = NegotiationModel.createNegotiation(
      this.dateInput.value,
      this.valueInput.value,
      this.quantityInput.value
    )

    const isValidDay: boolean = DateUtils.isWorkDay(negotiation.date)

    if (isValidDay) {
      this.negotiationsHandler.add(negotiation)
      this.updateViews()

      this.cleanForm()
    } else {
      this.toastMessageView.update(TOAST_WEEK_DAY_ERROR_TEXT)
    }
  }

  public async importNegotiationsData(): Promise<void> {
    const negotiationsDataList = await this.negotiationsDataService.getNegotiationsData()

    negotiationsDataList.forEach((negotiation) => {
      this.negotiationsHandler.add(negotiation)
    })

    this.updateViews()
  }

  private cleanForm(): void {
    this.dateInput.value = ''
    this.valueInput.value = ''
    this.quantityInput.value = ''

    this.dateInput.focus()
  }

  private updateViews(): void {
    this.negotiationView.update(this.negotiationsHandler)
    this.toastMessageView.update(TOAST_MESSAGE_TEXT)
  }
}
