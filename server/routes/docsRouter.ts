import { Router } from 'express'
import path from 'path'
const router = Router()
const dist = path.resolve("dist", "index.html")
const createdDocs = require('../controllers/createdDocs')
router.get("/", (req, res) => {
    res.sendFile(dist)
})
router.post('/created', createdDocs.created)

router.get('/trotling', async (req, res) => {
    console.log(123123)
    res.status(200).send({ point: 20000 })
})

module.exports = router