var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector, inspect, performanceLog } from '../decorators/index.js';
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
const GET_NEGOTIATIONS_DATA_PATH = '/dados';
export class NegotiationController {
    dateInput;
    quantityInput;
    valueInput;
    negotiationsHandler = new NegotiationsHandler();
    negotiationView = new NegotiationsView(NEGOTIATIONS_VIEW_ID);
    toastMessageView = new ToastMessageView(TOAST_MESSAGE_VIEW_ID);
    constructor() {
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
    async importNegotiationsData() {
        const dataServiceModule = await import('../services/negotiations-data-service.js');
        const dataService = new dataServiceModule.NegotiationsDataService(GET_NEGOTIATIONS_DATA_PATH);
        const negotiationsDataList = await dataService.getNegotiationsData();
        const filteredNegotiations = negotiationsDataList.filter((dayNegotiation) => !this.negotiationsHandler
            .getNegotiations()
            .some((negotiation) => negotiation.compare(dayNegotiation)));
        filteredNegotiations.forEach((negotiation) => {
            this.negotiationsHandler.add(negotiation);
        });
        this.updateViews();
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
__decorate([
    domInjector(NEGOTIATION_INPUT_IDS.DATE)
], NegotiationController.prototype, "dateInput", void 0);
__decorate([
    domInjector(NEGOTIATION_INPUT_IDS.QUANTITY)
], NegotiationController.prototype, "quantityInput", void 0);
__decorate([
    domInjector(NEGOTIATION_INPUT_IDS.VALUE)
], NegotiationController.prototype, "valueInput", void 0);
__decorate([
    inspect(),
    performanceLog()
], NegotiationController.prototype, "add", null);
//# sourceMappingURL=negotiation-controller.js.map