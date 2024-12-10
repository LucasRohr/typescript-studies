import Collaborator from './models/collaborator'
import CompanySystem from './models/company-system'
import { Positions } from './enum/positions'

const companySystem = new CompanySystem()

const collaborator1 = new Collaborator('José', Positions.Intern)
const collaborator2 = new Collaborator('Maria', Positions.Junior)
const collaborator3 = new Collaborator('João', Positions.MidLevel)

companySystem.hireCollaborator(collaborator1)
companySystem.hireCollaborator(collaborator2)
companySystem.hireCollaborator(collaborator3)

console.log(companySystem.generateJsonReport())

console.log(collaborator1)
companySystem.payCollaborator(collaborator1)
console.log(collaborator1)
