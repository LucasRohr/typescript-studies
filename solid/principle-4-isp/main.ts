import { PaymentInterface } from './interfaces/payment-interface'

class CheckPaymentModel implements PaymentInterface {
  value: number

  constructor(valor: number) {
    this.value = valor
  }

  pay(): void {
    console.log(`Payment of $ ${this.value} will be made using check.`)
  }
}

class MoneyPaymentModel implements PaymentInterface {
  value: number

  constructor(valor: number) {
    this.value = valor
  }

  pay(): void {
    console.log(`Payment of $ ${this.value} will be made using money.`)
  }
}

class PixPaymentModel implements PaymentInterface {
  value: number

  constructor(valor: number) {
    this.value = valor
  }

  pay(): void {
    console.log(`Payment of $ ${this.value} will be made using Pix.`)
  }
}

const checkPayment = new CheckPaymentModel(100)
checkPayment.pay()

const moneyPayment = new MoneyPaymentModel(200)
moneyPayment.pay()

const pixPayment = new PixPaymentModel(300)
pixPayment.pay()
