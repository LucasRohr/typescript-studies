import { Printable } from '../interfaces/index.js'

export class NegotiationModel implements Printable {
  constructor(
    private _value: number,
    private _date: Date,
    private _quantity: number
  ) {}

  public static createNegotiation(
    dateText: string,
    valueText: string,
    quantityText: string
  ): NegotiationModel {
    const regExp = /-/g
    const date = new Date(dateText.replace(regExp, ',')) // replace - for , with regex to parse date
    const value = parseFloat(valueText)
    const quantity = parseInt(quantityText)

    return new NegotiationModel(value, date, quantity)
  }

  public toString(): string {
    return `
      Date: ${this.date}
      Value: ${this.value}
      Quantity: ${this.quantity}
    `
  }

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
