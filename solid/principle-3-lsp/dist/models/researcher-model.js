"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearcherModel = void 0;
var ResearcherModel = /** @class */ (function () {
    function ResearcherModel(name, workload, advisor) {
        this.name = name;
        this.workload = workload;
        this.advisor = advisor;
    }
    ResearcherModel.prototype.research = function () {
        console.log("I'm ".concat(this.name, " and I reasearch ").concat(this.workload, " hours per week to fullfil it in my graduation"));
    };
    ResearcherModel.prototype.writeReport = function () {
        console.log("I'm ".concat(this.name, " and I write reports to my advisor ").concat(this.advisor.name));
    };
    return ResearcherModel;
}());
exports.ResearcherModel = ResearcherModel;
