import app from "../../../../../src/adapters/presentations/api/config/app";
import { MongoManager } from "../../../../../src/dataSources/config/mongoManager";
import request from "supertest";

describe("Task Routes", () => {
  const mongoClient = MongoManager.getInstance();

  beforeAll(async () => {
    await mongoClient.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await mongoClient.disconnect();
  });

  it("Should return status code 204 if Tasks List returns an empty result", async () => {
    await request(app).get("/api/tasks").expect(204);
  });
});
