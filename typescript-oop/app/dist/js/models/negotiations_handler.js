export class NegotiationsHandler {
    // Alternate declaration: Array<NegotiationModel>
    negotiations = [];
    constructor(negotiations) {
        this.negotiations = negotiations ?? [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    // Alternate return type: ReadonlyArray<NegotiationModel>
    getNegotiations() {
        return this.negotiations;
    }
}
