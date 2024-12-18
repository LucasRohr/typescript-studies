import { ClientEntity } from '../entities/client-entity'
import { InMemoryRepository } from '../repositories/InMemoryRepository'

export class ClientController {
  repository: InMemoryRepository

  constructor() {
    this.repository = new InMemoryRepository()
  }

  addClient(cliente: ClientEntity) {
    this.repository.addClient(cliente)
  }

  getClients() {
    return this.repository.getClients()
  }
}
