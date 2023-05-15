const mongoose = require('mongoose')
const {model, Schema} = mongoose

const UserSchema = new Schema({
  address: String,
  addressList: [String],
  walletType: String
}, {timestamps: true})

const User = model("User", UserSchema)

module.exports = {
  User,
}
