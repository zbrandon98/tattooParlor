import express from 'express'

const router = express.Router()

router.get('/foo', (req, res) => {
  res.send('OK');
})

export default router