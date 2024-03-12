import { NegotiationModel } from '../models/index.js';
const BASE_URL = 'http://localhost:8080';
export class NegotiationsDataService {
    path;
    constructor(path) {
        this.path = `${BASE_URL}${path}`;
    }
    async getNegotiationsData() {
        const response = await fetch(this.path);
        if (response.ok) {
            const negotiationsData = await response.json();
            if (negotiationsData) {
                const mappedNegotiations = negotiationsData.map((negotiation) => new NegotiationModel(negotiation.montante, new Date(), negotiation.vezes));
                return mappedNegotiations;
            }
            else {
                throw Error('Retrieved negotiations data is null');
            }
        }
        else {
            throw Error('Error retrieving negotiations data');
        }
    }
}
//# sourceMappingURL=negotiations-data-service.js.map