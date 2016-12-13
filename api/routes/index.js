var express = require('express');
var router = express.Router();

var ctrlHeaderParser = require('../controllers/headerparser.controllers.js');

router
  .route('/whoami')
  .get(ctrlHeaderParser.getHeaderParser);

module.exports = router;