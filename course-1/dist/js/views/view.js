export class View {
    element;
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    get getElement() {
        return this.element;
    }
    update(model) {
        this.element.innerHTML = this.returnTemplate(model);
    }
}
