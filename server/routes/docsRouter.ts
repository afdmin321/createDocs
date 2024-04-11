import { Router } from 'express'
import path from 'path'
const router = Router()
const dist = path.resolve("dist", "index.html")
import createdDocs from '../controllers/createdDocs'
router.get("/", (req, res) => {
    res.sendFile(dist)
})
router.post('/created', createdDocs.created)

router.get('/trotling', async (req, res) => {
    res.status(200).send({ point: 20000 })
})

export default router