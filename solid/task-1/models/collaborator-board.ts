import Collaborator from './collaborator'

export default class CollaboratorBoard {
  private _collaborators: Collaborator[]

  constructor() {
    this._collaborators = []
  }

  hireCollaborator(collaborator: Collaborator) {
    this._collaborators.push(collaborator)
  }

  dismissCollaborator(collaboratorKey: Collaborator) {
    this._collaborators = this._collaborators.filter(
      (_collaborator) => _collaborator !== collaboratorKey
    )
  }

  get collaborators() {
    return this._collaborators
  }
}
