const express = require('express'),
	  app 	  = express(),
	  port    = process.env.PORT || 3000;

const bullRoutes = require('./routes/index')


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use(bullRoutes);

app.listen(port, () => {
	console.log('Raging Bull');
});