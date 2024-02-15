export class NegotiationModel {
  #value;
  #date;
  #quantity;

  constructor(value, date, quantity) {
    this.#value = value;
    this.#date = date;
    this.#quantity = quantity;
  }

  get value() {
    return this.#value;
  }

  get date() {
    return this.#date;
  }

  get quantity() {
    return this.#quantity;
  }

  get volume() {
    return this.#quantity * this.#value;
  }
}
