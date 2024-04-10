import { Router } from 'express'
const router = Router()

import docsRouter from "./docsRouter"


router.use('/', docsRouter)


export default router