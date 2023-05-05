const express = require('express')
const router = express.Router()
const protocolList = require('../controllers/protocolList.controller')

/* GET protocol list. */
router.get('/', protocolList.get)

module.exports = router;
