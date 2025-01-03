// Creates a singleton class to manage the connection to the MongoDB database.

import { MongoClient } from "mongodb";

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
}
