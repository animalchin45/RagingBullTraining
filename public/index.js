const express = require('express'),
	  app 	  = express(),
	  port    = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.render('index');
});

app.listen(port, function(){
	console.log('Raging Bull');
});