const admin = require('firebase-admin')
var serviceAccount = require('./toko-baju-2702d-firebase-adminsdk-1oct5-87247c4419.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://toko-baju-2702d.firebaseio.com'
})

var db = admin.firestore()
module.exports = db