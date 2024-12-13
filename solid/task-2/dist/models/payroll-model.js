"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollModel = void 0;
var PayrollModel = /** @class */ (function () {
    function PayrollModel() {
    }
    PayrollModel.calculateMonthSalary = function (collaboratorContract) {
        return collaboratorContract.calculateSalary();
    };
    PayrollModel.printMonthSalary = function (collaboratorContract) {
        console.log("I'm a ".concat(collaboratorContract.title, " and my monthly net salary is R$ ").concat(PayrollModel.calculateMonthSalary(collaboratorContract)));
    };
    return PayrollModel;
}());
exports.PayrollModel = PayrollModel;
