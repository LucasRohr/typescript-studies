import { ClientEntity } from "../../entities/client-entity";

export interface ClientRepositoryInterface {
    addClient(client: ClientEntity): void
    getClients(): ClientEntity[]
}
