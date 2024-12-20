import express from "express";
import { cors } from "../middlewares/cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors);
routes(app);

export default app;
