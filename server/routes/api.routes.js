const express = require('express')
const router = express.Router()
const productRoutes = require('./product.routes')

router.use('/product', productRoutes)
router.get('/', async (req,res) => {
  res.json({
    status: 'success',
    message: 'The Api Works!'
  })
})
router.get('*', async (req,res) => {
  res.json({
    status: 'error',
    message: 'Api not found!'
  })
})

module.exports = router