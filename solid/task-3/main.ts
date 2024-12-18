import { FullTimeEmployeeInterface } from './interfaces/full-time-employee-interface'
import { StudentEmployeeInterface } from './interfaces/student-employee-interface'
import { FullTimeEmployeeModel } from './models/full-time-employee-model'
import { StudentEmployeeModel } from './models/student-employee-model'

const fullTimeEmployee: FullTimeEmployeeInterface = new FullTimeEmployeeModel('João', 40, 2400)
const studentEmployee: StudentEmployeeInterface = new StudentEmployeeModel(
  'Enzo',
  20,
  fullTimeEmployee
)

// Full Time
console.log('name:', fullTimeEmployee.name)
console.log('gross salary:', fullTimeEmployee.salary)
console.log('net salary:', fullTimeEmployee.calculateSalary())
console.log('PS salary:', fullTimeEmployee.calculateProfitSharing(2.5), '\n')

// Student
console.log('name:', studentEmployee.name)
console.log('workload:', studentEmployee.workload)
console.log('advisor:', studentEmployee.advisor.name)
studentEmployee.writeReport()
