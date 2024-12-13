import { PaidContractInterface } from '../interfaces'

const FULL_TIME_HOUR_GAIN = 24
const FULL_TIME_DAY_HOURS = 8
const COMERCIAL_MONTH = 20

export class FullTimeContractModel implements PaidContractInterface {
  title: string = 'Full Time'

  calculateSalary(): number {
    return FULL_TIME_HOUR_GAIN * FULL_TIME_DAY_HOURS * COMERCIAL_MONTH
  }
}
