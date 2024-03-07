var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { sanitize } from '../decorators/sanitize.js';
import { View } from './view.js';
export class NegotiationsView extends View {
    mapTableBodyList(negotiationsHandler) {
        return negotiationsHandler
            .getNegotiations()
            .map((negotiation) => `<tr>
                <th>${negotiation.date.toLocaleDateString()}</th>
                <th>${negotiation.quantity}</th>
                <th>${negotiation.value}</th>
            </tr>`)
            .join('');
    }
    returnTemplate(negotiationsHandler) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    ${this.mapTableBodyList(negotiationsHandler)}
                </tbody>
            </table>
        `;
    }
}
__decorate([
    sanitize()
], NegotiationsView.prototype, "returnTemplate", null);
