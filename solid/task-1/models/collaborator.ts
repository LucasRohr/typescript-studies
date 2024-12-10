import { Positions } from '../enum/positions'

export default class Collaborator {
  public readonly name: string
  private _position: Positions
  private _balance: number

  constructor(name: string, position: Positions) {
    this.name = name
    this._position = position
    this._balance = 0
  }

  get position() {
    return this._position
  }

  set position(position: Positions) {
    this._position = position
  }

  get balance() {
    return this._balance
  }

  set balance(balance: number) {
    this._balance += balance
  }
}
