import env from "./adapters/presentations/api/config/env";
import app from "./adapters/presentations/api/config/app";

app.listen(env.port, () => {
  console.log(`Server is running on port http://localhost:${env.port}`);
});
