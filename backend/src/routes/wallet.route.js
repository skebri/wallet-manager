const express = require('express')
const router = express.Router()
const walletAddressesList = require('../controllers/walletList.controller')

/* GET protocol list. */
router.get('/user', walletAddressesList.get)

module.exports = router;
