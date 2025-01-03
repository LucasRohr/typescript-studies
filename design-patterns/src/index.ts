import env from "./adapters/presentations/api/config/env";
import app from "./adapters/presentations/api/config/app";
import { MongoManager } from "./dataSources/config/mongoManager";

const dbConnector = MongoManager.getInstance();

dbConnector
  .connect(env.mongoUrl)
  .then(() => {
    app.listen(env.port, () => {
      console.log(`Server is running on port http://localhost:${env.port}`);
    });
  })
  .catch(console.error);
