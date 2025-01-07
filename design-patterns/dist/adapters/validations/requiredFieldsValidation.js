"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldsValidation = void 0;
const missing_param_error_1 = require("../presentations/api/errors/missing-param-error");
class RequiredFieldsValidation {
    constructor(field) {
        this.field = field;
    }
    validate(data) {
        if (!data[this.field]) {
            return new missing_param_error_1.MissingParamError(this.field);
        }
    }
}
exports.RequiredFieldsValidation = RequiredFieldsValidation;
