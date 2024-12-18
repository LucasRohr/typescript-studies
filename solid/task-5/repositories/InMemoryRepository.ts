import { ClientEntity } from '../entities/client-entity'

export class InMemoryRepository {
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
