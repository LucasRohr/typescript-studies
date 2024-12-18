"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEmployeeModel = void 0;
var StudentEmployeeModel = /** @class */ (function () {
    function StudentEmployeeModel(name, workload, advisor) {
        this.name = name;
        this.workload = workload;
        this.advisor = advisor;
    }
    StudentEmployeeModel.prototype.work = function () {
        console.log("I'm ".concat(this.name, " and I reasearch ").concat(this.workload, " hours per week to fullfil it in my graduation"));
    };
    StudentEmployeeModel.prototype.writeReport = function () {
        console.log("I'm ".concat(this.name, " and I write reports to my advisor ").concat(this.advisor.name));
    };
    return StudentEmployeeModel;
}());
exports.StudentEmployeeModel = StudentEmployeeModel;
