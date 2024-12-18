import { FullTimeEmployeeInterface } from '../interfaces/full-time-employee-interface'
import { StudentEmployeeInterface } from '../interfaces/student-employee-interface'

export class StudentEmployeeModel implements StudentEmployeeInterface {
  constructor(
    public name: string,
    public workload: number,
    public advisor: FullTimeEmployeeInterface
  ) {}

  work(): void {
    console.log(
      `I'm ${this.name} and I reasearch ${this.workload} hours per week to fullfil it in my graduation`
    )
  }

  writeReport(): void {
    console.log(`I'm ${this.name} and I write reports to my advisor ${this.advisor.name}`)
  }
}
