"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryCalculator = void 0;
var positions_1 = require("../enum/positions");
var SalaryCalculator = /** @class */ (function () {
    function SalaryCalculator(baseSalary) {
        if (baseSalary === void 0) { baseSalary = 1000; }
        this.baseSalary = baseSalary;
    }
    SalaryCalculator.prototype.calculate = function (position) {
        if (position === positions_1.Positions.Intern) {
            return this.baseSalary * 1.2;
        }
        else if (position === positions_1.Positions.Junior) {
            return this.baseSalary * 3;
        }
        else if (position === positions_1.Positions.MidLevel) {
            return this.baseSalary * 5;
        }
        else if (position === positions_1.Positions.Senior) {
            return this.baseSalary * 7;
        }
        return 0;
    };
    return SalaryCalculator;
}());
exports.SalaryCalculator = SalaryCalculator;
