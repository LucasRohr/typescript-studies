import { Printable } from '../interfaces/index.js'

export class PrintUtils {
  public static print(...args: Printable[]) {
    args.forEach((object) => {
      object.toString()
    })
  }
}
