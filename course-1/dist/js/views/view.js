export class View {
    element;
    sanitize = false;
    constructor(selector, sanitize) {
        this.element = document.querySelector(selector);
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
