const admin = require('firebase-admin')
var serviceAccount = require('./toko-baju-494682a2215f.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

var db = admin.firestore()
module.exports = db