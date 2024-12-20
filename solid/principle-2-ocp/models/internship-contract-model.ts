import { PaidContractInterface } from '../interfaces'

const INTERNSHIP_HOUR_GAIN = 14
const INTERNSHIP_DAY_HOURS = 4
const COMERCIAL_MONTH = 20

export class InternshipContractModel implements PaidContractInterface {
  title: string = 'Intern'

  calculateSalary(): number {
    return INTERNSHIP_HOUR_GAIN * INTERNSHIP_DAY_HOURS * COMERCIAL_MONTH
  }
}
