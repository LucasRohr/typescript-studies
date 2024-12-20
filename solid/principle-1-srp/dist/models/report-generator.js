"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGenerator = void 0;
var ReportGenerator = /** @class */ (function () {
    function ReportGenerator(_collaborators, salaryCalculatorService) {
        this._collaborators = _collaborators;
        this.salaryCalculatorService = salaryCalculatorService;
    }
    ReportGenerator.prototype.generateJson = function () {
        var _this = this;
        var report = this._collaborators.map(function (collaborator) {
            return {
                nome: collaborator.name,
                cargo: collaborator.position,
                salario: _this.salaryCalculatorService.calculate(collaborator.position),
            };
        });
        return JSON.stringify(report);
    };
    return ReportGenerator;
}());
exports.ReportGenerator = ReportGenerator;
