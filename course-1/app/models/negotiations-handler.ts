import { NegotiationModel } from './negotiation'

export class NegotiationsHandler {
  // Alternate declaration: Array<NegotiationModel>
  private negotiations: NegotiationModel[] = []

  constructor(negotiations?: NegotiationModel[]) {
    this.negotiations = negotiations ?? []
  }

  public add(negotiation: NegotiationModel): void {
    this.negotiations.push(negotiation)
  }

  // Alternate return type: ReadonlyArray<NegotiationModel>
  public getNegotiations(): readonly NegotiationModel[] {
    return this.negotiations
  }
}
