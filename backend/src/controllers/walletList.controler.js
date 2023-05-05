const { getWalletAddresses } = require('../services/walletList.service');

const get = async (req, res, next) => {
  try {
    res.json(await getWalletAddresses());
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
}
