import { ClientController } from './controller/client-controller'
import { ClientEntity } from './entities/client-entity'

const clientController = new ClientController()

const client1 = new ClientEntity(0, 'João', 'joao@mail.com')
const client2 = new ClientEntity(0, 'Kleber', 'kleber@mail.com')

clientController.addClient(client1)
clientController.addClient(client2)

console.log(clientController.getClients())
