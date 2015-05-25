var cheerio = require('cheerio');
var request = require('request');
var loopback = require('loopback');
var app = loopback();

var secrets = [];
var baseURL = 'http://secret.ly';

app.get('/secrets/:category', function(req, res) {
  var category = req.params.category;
  if (category) {
    baseURL += "c/" + category;
  }
  
  request(baseURL, function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
      secrets.push({status: "success"});
      var $ = cheerio.load(body);

      $('id-collection-secret').each(function(i) {
          var url = $(this).find('.center-fix').eq(2).text().trim();
          var permalink = '/c/' + category;
          var comments = $(this).find('.center-fix').eq(3).length;
          var secret = $(this).find('.center-fix').eq(4).text().trim();
          var image = $(this).find('.center-fix').eq(5).text().trim();
          var hearts = $(this).find('.center-fix').eq(6).length;
          
          var secret = {
            url: url,
            permalink: permalink,
            comments: comments,
            secret: secret,
            image: image, 
            hearts: hearts
          };
          secrets.push(secret);
      });
    }
  });  
  res.json(secrets);

});

app.get('/p/:id', function(req, res) {
  var uid = req.params.id;
  if (uid) {
    baseURL += "p/" + uid
  }

  request(baseURL, function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
      var $ = cheerio.load(body);
      var comments = [];

      $('id-collection-secret collection-secret').each(function(i) {
        var url = $(this).find('.center-fix').eq(2).text().trim();
        var permalink = '/p/' + uid;
        var comments = $(this).find('.center-fix').eq(3).length;
        var secret = $(this).find('.center-fix').eq(4).text().trim();
        var image = $(this).find('.center-fix').eq(5).text().trim();
        var hearts = $(this).find('.center-fix').eq(6).length;

        $('id-collection-secret collection-secret comments').each(function(i) {
            var commentHTML: $(this).find('.comment').eq(0).html(),
            var comment: $(this).find('.comment').eq(0).text().trim(),
            var user: $(this).find('.comment').eq(2).text().trim(),
            
            var comment = {
             comment_html: commentHTML,
             comment: comment,
             user: user,
             index: i
            };

            comments.push(comment);
        });
        
        var secret = {
          status: "success",
          post: {
            url: url
            permalink: permalink
            comments: comments
            secret: secret
            image: image
            hearts: hearts
          },
          comments: comments
        };
        res.json(secret);        
      });

    }
  });
  
});
app.listen(3000);
