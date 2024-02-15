import { NegotiationModel } from "./models/index.ts";

const negotiation = new NegotiationModel(200, new Date(), 10);

console.log(negotiation.volume);
