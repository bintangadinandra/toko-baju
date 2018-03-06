const express = require('express')
const productController = require('../controllers/product.controller')
const handler = require('../utils/handler')
const router = express.Router()

router.get('/', async(req,res) => {
  try {
    const result = await productController.getAllProduct()
    res.json(result)
  } catch (error) {
    return res.json(handler.routerError(error))
  }
})

router.get('/:id', async(req,res) => {
  try {
    const result = await productController.getSingleProduct(req.params.id)
    res.json(result)
  } catch (error) {
    return res.json(handler.routerError(error))
  }
})


module.exports = router