var loopback = require('loopback');
var app = loopback();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
