import { Positions } from '../enum/positions'

export class SalaryCalculator {
  constructor(private baseSalary: number = 1000) {}

  calculate(position: Positions) {
    if (position === Positions.Intern) {
      return this.baseSalary * 1.2
    } else if (position === Positions.Junior) {
      return this.baseSalary * 3
    } else if (position === Positions.MidLevel) {
      return this.baseSalary * 5
    } else if (position === Positions.Senior) {
      return this.baseSalary * 7
    }
    return 0
  }
}
