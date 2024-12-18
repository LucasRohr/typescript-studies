import { FullTimeEmployeeInterface } from './interfaces/full-time-employee-interface'
import { ResearcherInterface } from './interfaces/researcher-interface'
import { FullTimeEmployeeModel } from './models/full-time-employee-model'
import { ResearcherModel } from './models/researcher-model'

const fullTimeEmployee: FullTimeEmployeeInterface = new FullTimeEmployeeModel('João', 40, 2400)
const researcher: ResearcherInterface = new ResearcherModel('Enzo', 20, fullTimeEmployee)

// Full Time Employee
console.log('name:', fullTimeEmployee.name)
console.log('gross salary:', fullTimeEmployee.salary)
console.log('net salary:', fullTimeEmployee.calculateSalary())
console.log('PS salary:', fullTimeEmployee.calculateProfitSharing(2.5), '\n')

// Researcher
console.log('name:', researcher.name)
console.log('workload:', researcher.workload)
console.log('advisor:', researcher.advisor.name)
researcher.research()
researcher.writeReport()
