var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

var baseURL = 'http://secret.ly/'

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/secrets/:category', function(req, res) {
	var category = req.params.category;
	if (category) {
		baseURL+= "c/" + category;
	}
	console.log(baseURL);

	request(baseURL, function(err, resp, body) {
		if (!err && resp.statusCode == 200) {
			console.log("inside");
			var $ = cheerio.load(body);
			$('id-collection-secret').each(function(i) {
				var secret = $(this).find('.center-fix').eq(0).text().trim();
				console.log(secret);
			});

		}
	});


	res.send({test: "test"})
});

router.get('/p/:id', function(req, res) {
	var permalink = req.params.id;
	if (permalink) {
		baseURL+= "p/" + permalink;
	}

	request(baseURL, function(err, resp, body) {
		if (!err && resp.statusCode == 200) {
			var $ = cheerio.load(body);
			console.log($);
			$('id-collection-secret collection-secret').each(function(i) {
				var secret = $(this).find('.center-fix').eq(0).text().trim();
				console.log(secret);
			});

		}
	})

	res.send({test: "test"})
});

module.exports = router;