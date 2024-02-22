export class NegotiationModel {
  constructor(
    private _value: number,
    private _date: Date,
    private _quantity: number
  ) {}

  get value(): number {
    return this._value
  }

  get date(): Date {
    const parsedDate = new Date(this._date.getTime())
    return parsedDate
  }

  get quantity(): number {
    return this._quantity
  }

  get volume(): number {
    return this._quantity * this._value
  }
}
