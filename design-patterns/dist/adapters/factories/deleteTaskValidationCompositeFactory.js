"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskValidationCompositeFactory = void 0;
const requiredFieldsValidation_1 = require("../validations/requiredFieldsValidation");
const validationComposite_1 = require("../validations/validationComposite");
const deleteTaskValidationCompositeFactory = () => {
    const validations = [];
    validations.push(new requiredFieldsValidation_1.RequiredFieldsValidation("id"));
    return new validationComposite_1.ValidationComposite(validations);
};
exports.deleteTaskValidationCompositeFactory = deleteTaskValidationCompositeFactory;
