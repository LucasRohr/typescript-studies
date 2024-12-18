interface Payment {
  value: number
  payMoney(): void
  payTransfer(): void
  payCheck(): void
}

class CheckPaymentModel implements Payment {
  value: number

  constructor(valor: number) {
    this.value = valor
  }

  payCheck(): void {
    console.log(`Payment of $ ${this.value} will be made using check.`)
  }

  payMoney(): void {
    throw new Error("A check payment can't be done using money.")
  }

  payTransfer(): void {
    throw new Error("A check payment can't be done by transfer.")
  }
}

class MoneyPaymentModel implements Payment {
  value: number

  constructor(valor: number) {
    this.value = valor
  }

  payMoney(): void {
    console.log(`Payment of $ ${this.value} will be made using money.`)
  }

  payTransfer(): void {
    throw new Error("A money payment can't be done by transfer.")
  }

  payCheck(): void {
    throw new Error("A money payment can't be done using check.")
  }
}

class TransferPaymentModel implements Payment {
  value: number

  constructor(valor: number) {
    this.value = valor
  }

  payTransfer(): void {
    console.log(`Payment of $ ${this.value} will be made using transfer.`)
  }

  payMoney(): void {
    throw new Error("A transfer payment can't be done using money.")
  }

  payCheck(): void {
    throw new Error("A transfer payment can't be done using check.")
  }
}

const checkPayment = new CheckPaymentModel(100)
checkPayment.payCheck()

const moneyPayment = new MoneyPaymentModel(200)
moneyPayment.payMoney()

const transferPayment = new TransferPaymentModel(300)
transferPayment.payTransfer()

moneyPayment.payTransfer() //🤔🤔🤔
