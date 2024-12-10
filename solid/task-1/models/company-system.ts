import { Positions } from '../enum/positions'
import Collaborator from './collaborator'

export default class CompanySystem {
  private _collaborators: Collaborator[]
  protected baseSalary: number

  constructor(baseSalary: number = 1000) {
    this._collaborators = []
    this.baseSalary = baseSalary
  }

  hireCollaborator(collaborator: Collaborator) {
    this._collaborators.push(collaborator)
  }

  dismissCollaborator(collaboratorKey: Collaborator) {
    this._collaborators = this._collaborators.filter(
      (_collaborator) => _collaborator !== collaboratorKey
    )
  }

  calculateSalary(position: Positions) {
    if (position === Positions.Intern) {
      return this.baseSalary * 1.2
    } else if (position === Positions.Junior) {
      return this.baseSalary * 3
    } else if (position === Positions.MidLevel) {
      return this.baseSalary * 5
    } else if (position === Positions.Senior) {
      return this.baseSalary * 7
    }
    return 0
  }

  payCollaborator(collaborator: Collaborator) {
    const collaboratorSalary = this.calculateSalary(collaborator.position)
    collaborator.balance = collaboratorSalary
  }

  generateJsonReport() {
    const report = this._collaborators.map((collaborator) => {
      return {
        nome: collaborator.name,
        cargo: collaborator.position,
        salario: this.calculateSalary(collaborator.position),
      }
    })

    return JSON.stringify(report)
  }

  get collaborators() {
    return this._collaborators
  }
}
