const express = require('express')
const router = express.Router()

router.get('/', async(req,res) => {
  res.json({
    status: 'success',
    product_list: [
      {
        name: 'Lord Commander Coat',
        description: 'Wonderful'
      }
    ]
  })
})


module.exports = router