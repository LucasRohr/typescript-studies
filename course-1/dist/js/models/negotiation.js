export class NegotiationModel {
    _value;
    _date;
    _quantity;
    constructor(_value, _date, _quantity) {
        this._value = _value;
        this._date = _date;
        this._quantity = _quantity;
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
