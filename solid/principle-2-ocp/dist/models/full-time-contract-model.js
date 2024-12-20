"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeContractModel = void 0;
var FULL_TIME_HOUR_GAIN = 24;
var FULL_TIME_DAY_HOURS = 8;
var COMERCIAL_MONTH = 20;
var FullTimeContractModel = /** @class */ (function () {
    function FullTimeContractModel() {
        this.title = 'Full Time';
    }
    FullTimeContractModel.prototype.calculateSalary = function () {
        return FULL_TIME_HOUR_GAIN * FULL_TIME_DAY_HOURS * COMERCIAL_MONTH;
    };
    return FullTimeContractModel;
}());
exports.FullTimeContractModel = FullTimeContractModel;
