export class View {
    element;
    sanitize = false;
    constructor(selector, sanitize) {
        const selectorElement = document.querySelector(selector);
        if (selectorElement) {
            this.element = selectorElement;
        }
        else {
            const errorMessage = `Selector ${selector} is invalid, please verify the element`;
            throw new Error(errorMessage);
        }
        this.sanitize = sanitize ?? false;
    }
    get getElement() {
        return this.element;
    }
    update(model) {
        const template = this.returnTemplate(model);
        if (this.sanitize) {
            this.element.innerHTML = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        else {
            this.element.innerHTML = template;
        }
    }
}
