import { ClientEntity } from '../entities/client-entity'
import { ClientRepositoryInterface } from '../repositories/interfaces/client-repository-interface'

export class ClientController {
  constructor(private repository: ClientRepositoryInterface) {}

  addClient(cliente: ClientEntity) {
    this.repository.addClient(cliente)
  }

  getClients() {
    return this.repository.getClients()
  }
}
