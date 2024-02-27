export class View {
    element;
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    get getElement() {
        return this.element;
    }
    returnTemplate(model) {
        const ERROR_MESSAGE = 'Subclass needs to override returnTemplate method';
        throw Error(ERROR_MESSAGE);
    }
    update(model) {
        this.element.innerHTML = this.returnTemplate(model);
    }
}
