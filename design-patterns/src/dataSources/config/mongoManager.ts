// Creates a singleton class to manage the connection to the MongoDB database.

import { Collection, MongoClient } from "mongodb";

export class MongoManager {
  public static instance: MongoManager;
  private client: MongoClient | null = null;

  private constructor() {}

  public static getInstance(): MongoManager {
    if (!MongoManager.instance) {
      MongoManager.instance = new MongoManager();
    }

    return this.instance;
  }

  public async connect(url: string): Promise<void> {
    if (!this.client) {
      this.client = new MongoClient(url);
    }
  }

  public getCollection(name: string): Collection {
    if (!this.client) {
      throw new Error("Client not connected");
    }

    return this.client.db().collection(name);
  }
}
