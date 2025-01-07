"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskValidationCompositeFactory = void 0;
const dateValidatorAdapter_1 = require("../dateValidatorAdapter");
const dateValidation_1 = require("../validations/dateValidation");
const requiredFieldsValidation_1 = require("../validations/requiredFieldsValidation");
const validationComposite_1 = require("../validations/validationComposite");
const addTaskValidationCompositeFactory = () => {
    const validations = [];
    const dateValidator = new dateValidatorAdapter_1.DateValidatorAdapter();
    const requiredFields = ["title", "description", "date"];
    requiredFields.forEach((field) => {
        validations.push(new requiredFieldsValidation_1.RequiredFieldsValidation(field));
    });
    validations.push(new dateValidation_1.DateValidation("date", dateValidator));
    return new validationComposite_1.ValidationComposite(validations);
};
exports.addTaskValidationCompositeFactory = addTaskValidationCompositeFactory;
