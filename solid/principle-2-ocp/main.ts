import { CompanyContractModel, FullTimeContractModel, InternshipContractModel } from './models'
import { PayrollModel } from './models/payroll-model'

const fullTimeContract = new FullTimeContractModel()
const internContract = new InternshipContractModel()
const companyContract = new CompanyContractModel()

PayrollModel.printMonthSalary(fullTimeContract)
PayrollModel.printMonthSalary(internContract)
PayrollModel.printMonthSalary(companyContract)
