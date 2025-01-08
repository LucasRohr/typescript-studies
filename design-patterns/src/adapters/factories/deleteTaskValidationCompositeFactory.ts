import { Validation } from "../interfaces/validation";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";
import { ValidationComposite } from "../validations/validationComposite";

export const deleteTaskValidationCompositeFactory = (): ValidationComposite => {
  const validations: Validation[] = [];

  validations.push(new RequiredFieldsValidation("id"));

  return new ValidationComposite(validations);
};
