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
