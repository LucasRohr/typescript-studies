import { PaidContractInterface } from '../interfaces'

export class PayrollModel {
  static calculateMonthSalary(collaboratorContract: PaidContractInterface): number {
    return collaboratorContract.calculateSalary()
  }

  static printMonthSalary(collaboratorContract: PaidContractInterface): void {
    console.log(
      `I'm a ${
        collaboratorContract.title
      } and my monthly net salary is R$ ${PayrollModel.calculateMonthSalary(collaboratorContract)}`
    )
  }
}
