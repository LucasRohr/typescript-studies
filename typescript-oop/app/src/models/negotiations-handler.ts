import { ModelInterface } from '../interfaces/index.js'
import { NegotiationModel } from './negotiation.js'

export class NegotiationsHandler implements ModelInterface<NegotiationsHandler> {
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

  public toString(): string {
    return JSON.stringify(this.negotiations, null, 2)
  }

  public compare(negotiations: NegotiationsHandler): boolean {
    return this.negotiations.every((negotiation) => negotiations.negotiations.includes(negotiation))
  }
}
