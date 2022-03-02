//DE LEON, KIMBERLY 
//WD-201

var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/process_post', urlencodedParser, function (req, res) {  
   
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name, 
       course:req.body.course,
       age:req.body.age,
       comment:req.body.comment 
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(5026, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})
//http://127.0.0.1:8081/index.html