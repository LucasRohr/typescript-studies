"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./adapters/presentations/api/config/env"));
const app_1 = __importDefault(require("./adapters/presentations/api/config/app"));
app_1.default.listen(env_1.default.port, () => {
    console.log(`Server is running on port http://localhost:${env_1.default.port}`);
});
