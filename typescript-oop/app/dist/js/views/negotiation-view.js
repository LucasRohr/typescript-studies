export class NegotiationsView {
    constructor(selector) { }
    renderTemplateTable() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody/>
            </table>
        `;
    }
}
