"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var full_time_employee_model_1 = require("./models/full-time-employee-model");
var researcher_model_1 = require("./models/researcher-model");
var fullTimeEmployee = new full_time_employee_model_1.FullTimeEmployeeModel('João', 40, 2400);
var researcher = new researcher_model_1.ResearcherModel('Enzo', 20, fullTimeEmployee);
// Full Time
console.log('name:', fullTimeEmployee.name);
console.log('gross salary:', fullTimeEmployee.salary);
console.log('net salary:', fullTimeEmployee.calculateSalary());
console.log('PS salary:', fullTimeEmployee.calculateProfitSharing(2.5), '\n');
// Student
console.log('name:', researcher.name);
console.log('workload:', researcher.workload);
console.log('advisor:', researcher.advisor.name);
researcher.writeReport();
researcher.research();
