import { Router } from 'express'
const router = Router()

const createdDocs = require('../controllers/createdDocs')

router.post('/created', createdDocs.created)

router.get('/trotling', async (req, res) => {
    console.log(123123)
    res.status(200).send({ point: 20000 })
})

module.exports = router