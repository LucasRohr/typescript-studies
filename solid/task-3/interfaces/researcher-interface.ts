import { FullTimeEmployeeInterface } from './full-time-employee-interface'

export interface ResearcherInterface {
  name: string
  workload: number
  advisor: FullTimeEmployeeInterface
  research(): void
  writeReport(): void
}
