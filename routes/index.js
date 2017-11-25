var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('html', { title: 'Express' });
    res.sendFile(path.resolve('public/html/index.html'));
});

module.exports = router;
