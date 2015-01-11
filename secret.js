var cheerio = require('cheerio');
var request = require('request');
var loopback = require('loopback');
var app = loopback();

var baseURL = 'http://secret.ly/';

app.get('/secrets/:category', function(req, res){
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

app.get('/p/:id', function(req, res) {
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
app.listen(3000);
