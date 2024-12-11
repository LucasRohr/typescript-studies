"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(salaryCalculatorService) {
        this.salaryCalculatorService = salaryCalculatorService;
    }
    Payment.prototype.pay = function (collaborator) {
        var collaboratorSalary = this.salaryCalculatorService.calculate(collaborator.position);
        collaborator.balance = collaboratorSalary;
    };
    return Payment;
}());
exports.Payment = Payment;
