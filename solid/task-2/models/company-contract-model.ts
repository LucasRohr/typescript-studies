import { PaidContractInterface } from '../interfaces'

const COMPANY_HOUR_GAIN = 28
const COMPANY_DAY_HOURS = 10
const COMERCIAL_MONTH = 20

export class CompanyContractModel implements PaidContractInterface {
  title: string = 'Company'

  calculateSalary(): number {
    return COMPANY_HOUR_GAIN * COMPANY_DAY_HOURS * COMERCIAL_MONTH
  }
}
