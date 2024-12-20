"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternshipContractModel = void 0;
var INTERNSHIP_HOUR_GAIN = 14;
var INTERNSHIP_DAY_HOURS = 4;
var COMERCIAL_MONTH = 20;
var InternshipContractModel = /** @class */ (function () {
    function InternshipContractModel() {
        this.title = 'Intern';
    }
    InternshipContractModel.prototype.calculateSalary = function () {
        return INTERNSHIP_HOUR_GAIN * INTERNSHIP_DAY_HOURS * COMERCIAL_MONTH;
    };
    return InternshipContractModel;
}());
exports.InternshipContractModel = InternshipContractModel;
