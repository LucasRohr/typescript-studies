export class NegotiationModel {
  private _value: number
  private _date: Date
  private _quantity: number

  constructor(value: number, date: Date, quantity: number) {
    this._value = value
    this._date = date
    this._quantity = quantity
  }

  get value(): number {
    return this._value
  }

  get date(): Date {
    return this._date
  }

  get quantity(): number {
    return this._quantity
  }

  get volume(): number {
    return this._quantity * this._value
  }
}
