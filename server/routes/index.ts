import { Router } from 'express'
const router = Router()

const docsRouter = require('./docsRouter')


router.use('/', docsRouter)


module.exports = router