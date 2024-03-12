import { NegotiationController } from './controllers/index.js';
const controller = new NegotiationController();
const form = document.querySelector('.form');
const importButton = document.querySelector('#import-button');
form?.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.add();
});
importButton?.addEventListener('click', (event) => {
    event.preventDefault();
    controller.importNegotiationsData();
});
//# sourceMappingURL=app.js.map