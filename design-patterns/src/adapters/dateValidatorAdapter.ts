import validator from "validator";

import { DateValidator } from "./interfaces/dateValidator";

export class DateValidatorAdapter implements DateValidator {
  isValid(date: string): boolean {
    return validator.isDate(date, {
      format: "DD/MM/YYYY",
    });
  }
}
