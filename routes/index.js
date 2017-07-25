
var express = require('express');
var admins = require('./admin');
var messages = require('./message');
var router = express.Router();

router.use('/admin', admins);
router.use('/message', messages);

module.exports = router;
