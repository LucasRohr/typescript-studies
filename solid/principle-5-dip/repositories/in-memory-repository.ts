import { ClientEntity } from '../entities/client-entity'
import { ClientRepositoryInterface } from './interfaces/client-repository-interface'

export class InMemoryRepository implements ClientRepositoryInterface {
  private db: ClientEntity[]

  constructor() {
    this.db = []
  }

  addClient(client: ClientEntity) {
    this.db.push(client)
  }

  getClients() {
    return this.db
  }
}
