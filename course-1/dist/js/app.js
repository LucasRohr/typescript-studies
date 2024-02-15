// JS test class for comparation between it and the TS version

import { NegotiationModel } from "./models/negotiation.js";

const negotiation = new NegotiationModel(200, new Date(), 10);

console.log(negotiation.volume);
