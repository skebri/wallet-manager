const express = require('express')
const router = express.Router()
const walletAddressesList = require('../controllers/walletList.controller')

/* GET protocol list. */
router.get('/', walletAddressesList.get)
router.post('/user', walletAddressesList.post)

module.exports = router;
