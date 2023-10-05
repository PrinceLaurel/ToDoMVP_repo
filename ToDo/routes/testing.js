var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('testing', {title: 'Y'});
  });

module.exports = router;


