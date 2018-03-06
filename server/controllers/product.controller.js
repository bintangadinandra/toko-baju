const db = require('../services/firebase')
const transformUtil = require('../utils/transform')
const handler = require('../utils/handler')

const getAllProduct = async () => {
  try {
    const productRef = db.collection('product')
    const querySnapshot = await productRef.get()
    return handler.successHandler(transformUtil.convertToArray(querySnapshot), 'Get All Product Success')
  } catch (error) {
    console.log(error)
    return handler.controllerError(error)
  }
}

const getSingleProduct = async (productId) => {
  try {
    const productRef = db.collection('product').doc(productId)
    const querySnapshot = await productRef.get()
    var data = handler.successHandler(Object.assign(querySnapshot.data(), {id: productId}), 'Get Single Product Success')
    return data
  } catch (error) {
    console.log(error)
    return handler.controllerError(error)
  }
}

module.exports = {
  getAllProduct,
  getSingleProduct
}