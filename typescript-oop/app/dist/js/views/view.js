export class View {
    element;
    constructor(selector) {
        const selectorElement = document.querySelector(selector);
        if (selectorElement) {
            this.element = selectorElement;
        }
        else {
            const errorMessage = `Selector ${selector} is invalid, please verify the element`;
            throw new Error(errorMessage);
        }
    }
    get getElement() {
        return this.element;
    }
    update(model) {
        const template = this.returnTemplate(model);
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map