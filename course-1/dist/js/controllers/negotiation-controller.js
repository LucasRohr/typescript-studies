import { NegotiationModel } from '../models/negotiation.js';
import { NegotiationsHandler } from '../models/negotiations-handler.js';
import { DateUtils } from '../utils/index.js';
import { NegotiationsView, ToastMessageView } from '../views/index.js';
const NEGOTIATION_INPUT_IDS = Object.freeze({
    DATE: '#data',
    QUANTITY: '#quantidade',
    VALUE: '#valor',
});
const NEGOTIATIONS_VIEW_ID = '#negotiationsView';
const TOAST_MESSAGE_VIEW_ID = '#toastMessageView';
const TOAST_MESSAGE_TEXT = 'Negociação criada e incluida com sucesso!';
const TOAST_WEEK_DAY_ERROR_TEXT = 'A data informada deve ser um dia útil!';
export class NegotiationController {
    dateInput;
    quantityInput;
    valueInput;
    negotiationsHandler = new NegotiationsHandler();
    negotiationView = new NegotiationsView(NEGOTIATIONS_VIEW_ID, true);
    toastMessageView = new ToastMessageView(TOAST_MESSAGE_VIEW_ID);
    constructor() {
        // Init class instance with DOM element values
        this.dateInput = document.querySelector(NEGOTIATION_INPUT_IDS.DATE);
        this.quantityInput = document.querySelector(NEGOTIATION_INPUT_IDS.QUANTITY);
        this.valueInput = document.querySelector(NEGOTIATION_INPUT_IDS.VALUE);
        this.negotiationView.update(this.negotiationsHandler);
    }
    add() {
        const negotiation = NegotiationModel.createNegotiation(this.dateInput.value, this.valueInput.value, this.quantityInput.value);
        const isValidDay = DateUtils.isWorkDay(negotiation.date);
        if (isValidDay) {
            this.negotiationsHandler.add(negotiation);
            this.updateViews();
            this.cleanForm();
        }
        else {
            this.toastMessageView.update(TOAST_WEEK_DAY_ERROR_TEXT);
        }
    }
    cleanForm() {
        this.dateInput.value = '';
        this.valueInput.value = '';
        this.quantityInput.value = '';
        this.dateInput.focus();
    }
    updateViews() {
        this.negotiationView.update(this.negotiationsHandler);
        this.toastMessageView.update(TOAST_MESSAGE_TEXT);
    }
}
