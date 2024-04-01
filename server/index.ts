import express from "express"
import cors from "cors"
const router = require('./routes/index')
import config from "./config"

const errorHandler = require('./middleware/errorHandlingMiddleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use(errorHandler)

// Инициализация компонент приложения

app.listen(config.PORT, async () => {
    console.log(`Server has been started on port ${config.PORT}`)
})

