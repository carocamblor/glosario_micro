var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

router.get('/', indexController.index);

router.get('/results', indexController.results);

module.exports = router;
