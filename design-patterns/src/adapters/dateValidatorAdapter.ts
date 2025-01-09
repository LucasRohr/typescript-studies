import validator from "validator";

import { DateValidator } from "./interfaces";

export class DateValidatorAdapter implements DateValidator {
  isValid(date: string): boolean {
    return validator.isDate(date, {
      format: "DD/MM/YYYY",
    });
  }
}
