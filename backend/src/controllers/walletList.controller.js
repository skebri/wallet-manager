const { getWalletAddresses, registerWallet } = require('../services/walletList.service');

const get = async (req, res, next) => {
  try {
    res.json(await getWalletAddresses());
  } catch (err) {
    next(err);
  }
}

const post = async (req, res, next) => {
  try {
    const { body } = req;

    const {address, walletType} = body;

console.log('USAO U ROUTER');
// console.log("address: ", address);
// console.log("walletType: ", walletType);
    const result = registerWallet(address, walletType);

    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  post
}
