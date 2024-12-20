"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployeeModel = void 0;
var FullTimeEmployeeModel = /** @class */ (function () {
    function FullTimeEmployeeModel(name, workload, salary) {
        this.name = name;
        this.workload = workload;
        this.salary = salary;
    }
    FullTimeEmployeeModel.prototype.work = function () {
        console.log("I'm ".concat(this.name, " and I work ").concat(this.workload, "h per week"));
    };
    FullTimeEmployeeModel.prototype.calculateSalary = function () {
        var DISCOUNT_TAX = 0.2;
        var discount = this.salary * DISCOUNT_TAX;
        return this.salary - discount;
    };
    FullTimeEmployeeModel.prototype.calculateProfitSharing = function (profit) {
        return profit * this.salary;
    };
    return FullTimeEmployeeModel;
}());
exports.FullTimeEmployeeModel = FullTimeEmployeeModel;
