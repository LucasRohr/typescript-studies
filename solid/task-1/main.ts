import Collaborator from './models/collaborator'
import CollaboratorBoard from './models/collaborator-board'
import { Positions } from './enum/positions'
import { ReportGenerator } from './models/report-generator'
import { SalaryCalculator } from './models/salary-calculator'
import { Payment } from './models/payment'

const collaboratorBoard = new CollaboratorBoard()

const salaryCalculatorService = new SalaryCalculator()
const paymentService = new Payment(salaryCalculatorService)
const reportGenerator = new ReportGenerator(
  collaboratorBoard.collaborators,
  salaryCalculatorService
)

const collaborator1 = new Collaborator('José', Positions.Intern)
const collaborator2 = new Collaborator('Maria', Positions.Junior)
const collaborator3 = new Collaborator('João', Positions.MidLevel)

collaboratorBoard.hireCollaborator(collaborator1)
collaboratorBoard.hireCollaborator(collaborator2)
collaboratorBoard.hireCollaborator(collaborator3)

console.log(reportGenerator.generateJson())

console.log(collaborator1)
paymentService.pay(collaborator1)
console.log(collaborator1)
