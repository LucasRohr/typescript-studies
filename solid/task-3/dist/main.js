"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var full_time_employee_model_1 = require("./models/full-time-employee-model");
var student_employee_model_1 = require("./models/student-employee-model");
var fullTimeEmployee = new full_time_employee_model_1.FullTimeEmployeeModel('João', 40, 2400);
var studentEmployee = new student_employee_model_1.StudentEmployeeModel('Enzo', 20, fullTimeEmployee);
// Full Time
console.log('name:', fullTimeEmployee.name);
console.log('gross salary:', fullTimeEmployee.salary);
console.log('net salary:', fullTimeEmployee.calculateSalary());
console.log('PS salary:', fullTimeEmployee.calculateProfitSharing(2.5), '\n');
// Student
console.log('name:', studentEmployee.name);
console.log('workload:', studentEmployee.workload);
console.log('advisor:', studentEmployee.advisor.name);
studentEmployee.writeReport();
