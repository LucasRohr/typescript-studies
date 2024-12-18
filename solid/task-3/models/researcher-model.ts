import { FullTimeEmployeeInterface } from '../interfaces/full-time-employee-interface'
import { ResearcherInterface } from '../interfaces/researcher-interface'

export class ResearcherModel implements ResearcherInterface {
  constructor(
    public name: string,
    public workload: number,
    public advisor: FullTimeEmployeeInterface
  ) {}

  research(): void {
    console.log(
      `I'm ${this.name} and I reasearch ${this.workload} hours per week to fullfil it in my graduation`
    )
  }

  writeReport(): void {
    console.log(`I'm ${this.name} and I write reports to my advisor ${this.advisor.name}`)
  }
}
