import { View } from './view.js';
export class NegotiationsView extends View {
    returnTableBodyList(negotiationsHandler) {
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
        // Alternate date format solution: new Intl.DateTimeFormat().format(negotiation.date)
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
                    ${this.returnTableBodyList(negotiationsHandler)}
                </tbody>
            </table>
        `;
    }
}
