"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateValidation = void 0;
const invalid_param_error_1 = require("../presentations/api/errors/invalid-param-error");
class DateValidation {
    constructor(field, dateValidator) {
        this.field = field;
        this.dateValidator = dateValidator;
    }
    validate(data) {
        const isValid = this.dateValidator.isValid(data[this.field]);
        if (!isValid) {
            return new invalid_param_error_1.InvalidParamError(this.field);
        }
    }
}
exports.DateValidation = DateValidation;
