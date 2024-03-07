var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect, performanceLog } from '../decorators/index.js';
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
__decorate([
    inspect(),
    performanceLog(true)
], View.prototype, "update", null);
