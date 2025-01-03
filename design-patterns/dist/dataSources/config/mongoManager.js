"use strict";
// Creates a singleton class to manage the connection to the MongoDB database.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoManager = void 0;
const mongodb_1 = require("mongodb");
class MongoManager {
    constructor() {
        this.client = null;
    }
    static getInstance() {
        if (!MongoManager.instance) {
            MongoManager.instance = new MongoManager();
        }
        return this.instance;
    }
    async connect(url) {
        if (!this.client) {
            this.client = new mongodb_1.MongoClient(url);
        }
    }
}
exports.MongoManager = MongoManager;
