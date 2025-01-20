"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../../../../src/adapters/presentations/api/config/app"));
const mongoManager_1 = require("../../../../../src/dataSources/config/mongoManager");
const supertest_1 = __importDefault(require("supertest"));
describe("Task Routes", () => {
    const mongoClient = mongoManager_1.MongoManager.getInstance();
    beforeAll(async () => {
        await mongoClient.connect(process.env.MONGO_URL);
    });
    afterAll(async () => {
        await mongoClient.disconnect();
    });
    it("Should return status code 204 if Tasks List returns an empty result", async () => {
        await (0, supertest_1.default)(app_1.default).get("/api/tasks").expect(204);
    });
});
