export class NegotiationController {
    dateInput;
    quantityInput;
    valueInput;
    constructor() {
        // Init class instance with DOM element values
        this.dateInput = document.querySelector('#data');
        this.quantityInput = document.querySelector('#quantidade');
        this.valueInput = document.querySelector('#valor');
    }
    add() {
        console.log(this.dateInput);
        console.log(this.quantityInput);
        console.log(this.valueInput);
    }
}
