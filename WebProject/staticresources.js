var express=require('express');
var app=express();

app.use(express.static('public'));

app.use('/public',express.static(__dirname+'/public'));
app.use('/resource',express.static(__dirname+'/private'));

var server=app.listen(8080);