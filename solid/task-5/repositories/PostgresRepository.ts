import { ClientEntity } from '../entities/client-entity'

// Fake PostgreSQL DB representation using a class
export class PostgresRepository {
  private db: Record<number, ClientEntity>

  constructor() {
    this.db = {}
  }

  add(client: ClientEntity) {
    this.db[client.getId] = client
  }

  list() {
    const clients: ClientEntity[] = []

    for (const chave in this.db) {
      if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
        clients.push(this.db[chave])
      }
    }

    return clients
  }
}
