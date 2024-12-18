import { FullTimeEmployeeInterface } from '../interfaces/full-time-employee-interface'

export class FullTimeEmployeeModel implements FullTimeEmployeeInterface {
  constructor(public name: string, public workload: number, public salary: number) {}

  work(): void {
    console.log(`I'm ${this.name} and I work ${this.workload}h per week`)
  }

  calculateSalary(): number {
    const DISCOUNT_TAX = 0.2
    const discount = this.salary * DISCOUNT_TAX

    return this.salary - discount
  }

  calculateProfitSharing(profit: number): number {
    return profit * this.salary
  }
}
