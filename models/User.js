
const mongoose = require('mongoose');

/** 
 *  how to creat ea mongoose schema, creating schema we have a object that contain keys the keys are the name of the fields the keys are references to
 *  Objects inside each object we have the rules of the object like it is a string/number have date storing when object is create
 * Date is a MongoDB's Object who can store/manage time information of the user  Date.now() is a method, remember default is crucial for 
 * dealing with unwanted behavior like bugs occurring or exceptions 
 * 
 * 
 * **/

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('user', UserSchema);