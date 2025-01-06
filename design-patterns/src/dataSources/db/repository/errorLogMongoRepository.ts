import { ErrorLogRepository } from "../../../usecases/repository/errorLogRepository";
import { MongoManager } from "../../config/mongoManager";

export class ErrorLogMongoRepository implements ErrorLogRepository {
  async log(stack: string): Promise<void> {
    const errorsLogCollection =
      MongoManager.getInstance().getCollection("errorsLog");

    await errorsLogCollection.insertOne({
      stack,
      date: new Date(),
    });
  }
}
