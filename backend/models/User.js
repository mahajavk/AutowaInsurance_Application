const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
   firstname: {
      type: String
   },
   lastname: {
      type: String
   },
   email: {
      type: String
   },
   username: {
      type: String
   },
   password: {
      type: String
   }
   // } ,
   // isAdmin:{
   //    type:Boolean
   // }
}, {
   collection: 'users'
})
module.exports = mongoose.model('User', User)

