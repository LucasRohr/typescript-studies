import Collaborator from './collaborator'
import { SalaryCalculator } from './salary-calculator'

export class Payment {
  constructor(private salaryCalculatorService: SalaryCalculator) {}

  pay(collaborator: Collaborator) {
    const collaboratorSalary = this.salaryCalculatorService.calculate(collaborator.position)

    collaborator.balance = collaboratorSalary
  }
}
