import { NegotiationModel } from '../models/negotiation.js';
import { NegotiationsHandler } from '../models/negotiations_handler.js';
export class NegotiationController {
    dateInput;
    quantityInput;
    valueInput;
    negotiationsHandler;
    constructor() {
        // Init class instance with DOM element values
        this.dateInput = document.querySelector('#data');
        this.quantityInput = document.querySelector('#quantidade');
        this.valueInput = document.querySelector('#valor');
        this.negotiationsHandler = new NegotiationsHandler();
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiationsHandler.add(negotiation);
        console.log(this.negotiationsHandler.getNegotiations());
        this.cleanForm();
    }
    createNegotiation() {
        const regExp = /-/g;
        const date = new Date(this.dateInput.value.replace(regExp, ',')); // replace - for , with regex to parse date
        const value = parseFloat(this.valueInput.value);
        const quantity = parseInt(this.quantityInput.value);
        return new NegotiationModel(value, date, quantity);
    }
    cleanForm() {
        this.dateInput.value = '';
        this.valueInput.value = '';
        this.quantityInput.value = '';
        this.dateInput.focus();
    }
}
