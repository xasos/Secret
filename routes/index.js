var express = require('express');
var router = express.Router();
// var cheerio = require('cheerio');
// var request = require('request');

var baseURL = 'http://secret.ly/'

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/secrets/:category', function(req, res) {
	var category = req.params.category;
	if (category) {
		baseURL+=category;
	}

	res.send({test: "test"})
});

router.get('/p/:id', function(req, res) {
	var permalink = req.params.id;
	if (category) {
		baseURL+= "p/" + category;
	}

	res.send({test: "test"})
});

module.exports = router;