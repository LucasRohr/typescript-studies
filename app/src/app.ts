import { NegotiationController } from './controllers/index.js'

const controller = new NegotiationController()
const form = document.querySelector('.form')

form?.addEventListener('submit', (event: Event) => {
  event.preventDefault()
  controller.add()
})
