var express = require('express');
var router = express.Router();

let tasks = [{Description: "task 1"}, {Description: "task 2"}];
router.get('/', function(req, res, next) {
    res.json(tasks);
  });

module.exports = router;


