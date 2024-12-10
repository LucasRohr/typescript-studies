import { NegotiationDailyDataInterface } from '../interfaces/index.js'
import { NegotiationModel } from '../models/index.js'

const BASE_URL = 'http://localhost:8080'

export class NegotiationsDataService {
  private path: string

  constructor(path: string) {
    this.path = `${BASE_URL}${path}`
  }

  async getNegotiationsData(): Promise<NegotiationModel[]> {
    const response = await fetch(this.path)

    if (response.ok) {
      const negotiationsData: NegotiationDailyDataInterface[] = await response.json()

      if (negotiationsData) {
        const mappedNegotiations = negotiationsData.map(
          (negotiation) => new NegotiationModel(negotiation.montante, new Date(), negotiation.vezes)
        )

        return mappedNegotiations
      } else {
        throw Error('Retrieved negotiations data is null')
      }
    } else {
      throw Error('Error retrieving negotiations data')
    }
  }
}
