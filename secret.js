var cheerio = require('cheerio');
var request = require('request');
var loopback = require('loopback');
var app = loopback();

var baseURL = 'http://secret.ly';

app.get('/secrets/:category', function(req, res) {
  var category = req.params.category;
  if (category) {
    baseURL += "c/" + category;
  }
  
  request(baseURL, function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
      var $ = cheerio.load(body);
      var secrets = [];
      $('id-collection-secret').each(function(i) {
        var secret = {
          url: $(this).find('.center-fix').eq(2).text().trim(),
          permalink = '/' + baseURL,
          comments = $(this).find('.center-fix').eq(3).length,
          secret = $(this).find('.center-fix').eq(4).text().trim(),
          image = $(this).find('.center-fix').eq(5).text().trim(),
          hearts = $(this).find('.center-fix').eq(6).length
        };
        secrets.push(secret);
      });
    }
  });
  
  res.send({
    status: "success",
    secrets: secrets
  });
});

app.get('/p/:id', function(req, res) {
  var permalink = req.params.id;
  if (permalink) {
    baseURL += "p/" + permalink;
  }

  request(baseURL, function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
      var $ = cheerio.load(body);
      var secret = {};

      $('id-collection-secret collection-secret').each(function(i) {
        var secret = {
          status = "success"
          post = {
            url: $(this).find('.center-fix').eq(2).text().trim(),
            permalink:  '/' + baseURL,
            comment_count: $(this).find('.center-fix').eq(3).length
          },
          
          comments = $(this).find('.center-fix').eq(3).length,
          secret = $(this).find('.center-fix').eq(4).text().trim(),
          image = $(this).find('.center-fix').eq(5).text().trim(),
          hearts = $(this).find('.center-fix').eq(6).length
        };
      });
      res.send(secret);
    }
  })
  
});
app.listen(3000);
