var express=require('express');
var bodyparser=require('body-parser');
var app=express();
app.use(bodyparser.urlencoded({extended:false}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});


app.post('/submit-student-data',function(req,res){
//res.send('Post Request');
res.send(req.body.firstname);
});

var server=app.listen(8080,function()
{
    console.log('Node server is running');
})