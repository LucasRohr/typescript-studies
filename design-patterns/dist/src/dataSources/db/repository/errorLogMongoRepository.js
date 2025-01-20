"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogMongoRepository = void 0;
const mongoManager_1 = require("../../config/mongoManager");
class ErrorLogMongoRepository {
    async log(stack) {
        const errorsLogCollection = mongoManager_1.MongoManager.getInstance().getCollection("errorsLog");
        await errorsLogCollection.insertOne({
            stack,
            date: new Date(),
        });
    }
}
exports.ErrorLogMongoRepository = ErrorLogMongoRepository;
