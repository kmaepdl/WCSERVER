//name: De Leon, Kimberly Mae P.
//App name: Express-static 

var express = require("Express");

var app = express();

app.use(express.static('public'));

app.get("/", function(request, response){
  response.send("Successfully created the second App!");
});

var server = app.listen(2001, 'localhost', function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port);
}
);