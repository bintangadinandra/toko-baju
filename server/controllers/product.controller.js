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

const getProductByLimit = async () => {
  try {
    const productRef = await db.collection('product').orderBy('updatedAt', 'desc').limit(6)
    const querySnapshot = await productRef.get()
    // console.log(querySnapshot)
    return handler.successHandler(transformUtil.convertToArray(querySnapshot), 'Get Initial Ranged Product Success')
  } catch (error) {
    console.log(error)
    return handler.controllerError(error)
  }
}

const getNextProduct = async(date) => {
  try {
    let start = new Date(date);
    const productRef = db.collection('product').orderBy('updatedAt', 'desc').startAfter(start).limit(6)
    const querySnapshot = await productRef.get()
    return handler.successHandler(transformUtil.convertToArray(querySnapshot), 'Get Another Ranged Product Success')
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

const createNewProduct = async (payload) => {
  try {
    const newProductRef = await db.collection('product').doc()
    // there is a firestore bug regarding this...
    let data = Object.assign({}, payload)
    await newProductRef.set(data)
    await newProductRef.set({
      createdAt: new Date(),
      updatedAt: new Date()
      }, {merge: true}
    )
    return handler.successHandler('', 'Create Product Success')
  } catch (error) {
    console.log(error)
    return handler.controllerError(error)
  }
}

const updateProduct = async (payload, productId) => {
  try {
    // there is a firestore bug regarding this...
    let data = Object.assign({}, payload)
    await db.collection('product').doc(productId).set(data, {merge: true})
    return handler.successHandler('', 'Update Product Success')
  } catch (error) {
    console.log(error)
    return handler.controllerError(error)
  }
}

const deleteProduct = async (productId) => {
  try {
    const productRef = await db.collection('product').doc(productId)
    await productRef.delete()
    return handler.successHandler('', 'Delete Product Success')
  } catch (error) {
    console.log(error)
    return handler.controllerError(error)
  }
}

module.exports = {
  getAllProduct,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProductByLimit,
  getNextProduct
}