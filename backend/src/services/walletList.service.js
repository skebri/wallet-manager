const walletAddresses = require('../utils/walletAddresses')
const {User} = require('../models/wallet.model.js')
const mongoose = require('mongoose')

const getWalletAddresses = () => {
  return {
    walletAddresses,
  }
}

const registerWallet = async (address, walletType) => {
  try {
    if (!address || !walletType) {
      return false
    }

    const wallet = new User({
      address,
      addressList: [address],
      walletType
    })

    console.log("connecting to db!");

    await mongoose.connect("mongodb://localhost:27017/local", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    var db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error:"));

    db.once("open", function() {
      console.log("Connection Successful!");
    });

    console.log("saving to db!", wallet);

    wallet.save()

    return {
      registered: true
    }
  } catch (error) {

  }
}

module.exports = {
  getWalletAddresses,
  registerWallet,
}
