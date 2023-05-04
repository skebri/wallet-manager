const { getAllProtocols } = require('../services/protocolList.service');

const get = async (req, res, next) => {
  try {
    res.json(await getAllProtocols());
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
}
