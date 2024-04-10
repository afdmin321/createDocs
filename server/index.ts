import express from "express"
import cors from "cors"
import  router  from "./routes/index"
import config from "./config"
import bodyParser from "body-parser"
import path from "path"

import errorHandler from './middleware/errorHandlingMiddleware'

const app = express()
const dist: string = path.resolve("dist")

app.use(express.static(dist));
app.use(cors())
app.use(bodyParser.json({ limit: '250mb' }));
app.use(bodyParser.urlencoded({
    limit: '250mb',
    extended: true
}));
app.use(router)

app.use(errorHandler)

// Инициализация компонент приложения

app.listen(config.PORT, async () => {
    console.log(`Server has been started on port ${config.PORT}`)
})

