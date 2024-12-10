import { ModelInterface } from '../interfaces/index.js'

export class NegotiationModel implements ModelInterface<NegotiationModel> {
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

  public compare(negotiation: NegotiationModel): boolean {
    return (
      this.date.getDate() === negotiation.date.getDate() &&
      this.date.getMonth() === negotiation.date.getMonth() &&
      this.date.getFullYear() === negotiation.date.getFullYear()
    )
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
