import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { Validation } from "../interfaces/validation";
import { DateValidation } from "../validations/dateValidation";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";
import { ValidationComposite } from "../validations/validationComposite";

export const addTaskValidationCompositeFactory = (): ValidationComposite => {
  const validations: Validation[] = [];
  const dateValidator = new DateValidatorAdapter();
  const requiredFields = ["title", "description", "date"];

  requiredFields.forEach((field) => {
    validations.push(new RequiredFieldsValidation(field));
  });

  validations.push(new DateValidation("date", dateValidator));

  return new ValidationComposite(validations);
};
