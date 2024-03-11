export class NegotiationsHandler {
    negotiations = [];
    constructor(negotiations) {
        this.negotiations = negotiations ?? [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    getNegotiations() {
        return this.negotiations;
    }
    toString() {
        return JSON.stringify(this.negotiations, null, 2);
    }
}
