import Collaborator from './collaborator'
import { SalaryCalculator } from './salary-calculator'

export class ReportGenerator {
  constructor(
    private _collaborators: Collaborator[],
    private salaryCalculatorService: SalaryCalculator
  ) {}

  generateJson() {
    const report = this._collaborators.map((collaborator) => {
      return {
        nome: collaborator.name,
        cargo: collaborator.position,
        salario: this.salaryCalculatorService.calculate(collaborator.position),
      }
    })

    return JSON.stringify(report)
  }
}
