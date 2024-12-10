export class NegotiationModel {
    _value;
    _date;
    _quantity;
    constructor(_value, _date, _quantity) {
        this._value = _value;
        this._date = _date;
        this._quantity = _quantity;
    }
    static createNegotiation(dateText, valueText, quantityText) {
        const regExp = /-/g;
        const date = new Date(dateText.replace(regExp, ','));
        const value = parseFloat(valueText);
        const quantity = parseInt(quantityText);
        return new NegotiationModel(value, date, quantity);
    }
    toString() {
        return `
      Date: ${this.date}
      Value: ${this.value}
      Quantity: ${this.quantity}
    `;
    }
    compare(negotiation) {
        return (this.date.getDate() === negotiation.date.getDate() &&
            this.date.getMonth() === negotiation.date.getMonth() &&
            this.date.getFullYear() === negotiation.date.getFullYear());
    }
    get value() {
        return this._value;
    }
    get date() {
        const parsedDate = new Date(this._date.getTime());
        return parsedDate;
    }
    get quantity() {
        return this._quantity;
    }
    get volume() {
        return this._quantity * this._value;
    }
}
//# sourceMappingURL=negotiation.js.map