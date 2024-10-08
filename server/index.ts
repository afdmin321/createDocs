import express from "express";
import cors from "cors";
import router from "./routes/index";
import config from "./config";
import bodyParser from "body-parser";
import path from "path";

import errorHandler from "./middleware/errorHandlingMiddleware";
import { mainLogger } from "./logger";
const mongo = require("mongoose");

const app = express();
const dist: string = path.resolve("dist");

app.use(express.static(dist));
app.use(cors());
app.use(bodyParser.json({ limit: "250mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "250mb",
    extended: true,
  })
);
app.use(router);

app.use(errorHandler);

// Инициализация компонент приложения

app.listen(config.PORT, async () => {
  mongo
    .connect("mongodb://127.0.0.1:27017/cd")
    .then((res) => console.log("mongo conected"))
    .catch(console.log("error"));
  mainLogger.debug(`Server has been started on port ${config.PORT}`);
});
