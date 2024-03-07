import { NegotiationController } from './controllers/index.js'

const controller = new NegotiationController()

const form: HTMLFormElement | null = document.querySelector('.form')
const importButton: HTMLButtonElement | null = document.querySelector('#import-button')

form?.addEventListener('submit', (event: Event) => {
  event.preventDefault()
  controller.add()
})

importButton?.addEventListener('click', (event: Event) => {
  event.preventDefault()
  controller.importNegotiationsData()
})
