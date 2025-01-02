"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateValidatorAdapter = void 0;
const validator_1 = __importDefault(require("validator"));
class DateValidatorAdapter {
    isValid(date) {
        return validator_1.default.isDate(date, {
            format: "DD/MM/YYYY",
        });
    }
}
exports.DateValidatorAdapter = DateValidatorAdapter;
