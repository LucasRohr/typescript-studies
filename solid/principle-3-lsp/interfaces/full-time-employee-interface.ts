import { EmployeeInterface } from './employee-interface'

export interface FullTimeEmployeeInterface extends EmployeeInterface {
  salary: number
  calculateSalary(): number
  calculateProfitSharing(profit: number): number
}
