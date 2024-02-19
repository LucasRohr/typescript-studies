export class NegotiationModel {
    _value;
    _date;
    _quantity;
    constructor(value, date, quantity) {
        this._value = value;
        this._date = date;
        this._quantity = quantity;
    }
    get value() {
        return this._value;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get volume() {
        return this._quantity * this._value;
    }
}
