const express = require('express')
const router = express.Router()
const protocolList = require('../controllers/protocolList.controller')
const walletAddressesList = require('../controllers/protocolList.controller')

/* GET protocol list. */
router.get('/protocolList', protocolList.get)
router.get('/walletList', walletAddressesList.get)

module.exports = router;
