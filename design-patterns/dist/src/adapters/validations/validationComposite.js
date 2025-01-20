"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationComposite = void 0;
class ValidationComposite {
    constructor(validations) {
        this.validations = validations;
    }
    validate(data) {
        for (const validation of this.validations) {
            const error = validation.validate(data);
            if (error) {
                return error;
            }
        }
    }
}
exports.ValidationComposite = ValidationComposite;
