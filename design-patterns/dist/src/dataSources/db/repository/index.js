"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMongoRepository = exports.ErrorLogMongoRepository = void 0;
var errorLogMongoRepository_1 = require("./errorLogMongoRepository");
Object.defineProperty(exports, "ErrorLogMongoRepository", { enumerable: true, get: function () { return errorLogMongoRepository_1.ErrorLogMongoRepository; } });
var taskMongoRepository_1 = require("./taskMongoRepository");
Object.defineProperty(exports, "TaskMongoRepository", { enumerable: true, get: function () { return taskMongoRepository_1.TaskMongoRepository; } });
