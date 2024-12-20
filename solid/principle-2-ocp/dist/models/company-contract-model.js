"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyContractModel = void 0;
var COMPANY_HOUR_GAIN = 28;
var COMPANY_DAY_HOURS = 10;
var COMERCIAL_MONTH = 20;
var CompanyContractModel = /** @class */ (function () {
    function CompanyContractModel() {
        this.title = 'Company';
    }
    CompanyContractModel.prototype.calculateSalary = function () {
        return COMPANY_HOUR_GAIN * COMPANY_DAY_HOURS * COMERCIAL_MONTH;
    };
    return CompanyContractModel;
}());
exports.CompanyContractModel = CompanyContractModel;
