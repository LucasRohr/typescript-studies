import { ClientEntity } from '../entities/client-entity'
import { ClientRepositoryInterface } from './interfaces/client-repository-interface'

// Fake PostgreSQL DB representation using a class
export class PostgresRepository implements ClientRepositoryInterface {
  private db: Record<number, ClientEntity>

  constructor() {
    this.db = {}
  }

  addClient(client: ClientEntity) {
    this.db[client.getId] = client
  }

  getClients() {
    const clients: ClientEntity[] = []

    for (const chave in this.db) {
      if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
        clients.push(this.db[chave])
      }
    }

    return clients
  }
}
