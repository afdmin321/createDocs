import express from "express"
import cors from "cors"
import  router  from "./routes/index"
import config from "./config"
import bodyParser from "body-parser"
import path from "path"

import errorHandler from './middleware/errorHandlingMiddleware'
import { mainLogger } from "logger"

const app = express()
const dist: string = path.resolve("dist")

app.use(express.static(dist));
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(router)

app.use(errorHandler)

// Инициализация компонент приложения

app.listen(process.env.PORT || config.PORT, async () => {
    mainLogger.debug(`Server has been started on port ${config.PORT}`)
})

