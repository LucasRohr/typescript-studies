import { EmployeeInterface } from './employee-interface'
import { FullTimeEmployeeInterface } from './full-time-employee-interface'

export interface StudentEmployeeInterface extends EmployeeInterface {
  advisor: FullTimeEmployeeInterface
  writeReport(): void
}
