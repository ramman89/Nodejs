var express=require('express');

var app=express();

app.get('/',function(req,res){
    var sql=require('mysql');

var config=
{
    user:'root',
    password:'root',
    server:'localhost',
    database:'test' 
};

var con=sql.createConnection(config);
con.connect(function(err){
    //if(err) throw err;
    // console.log('Connected');

            con.query('select * from berkadia',function(err,result,fields){
                if(err) throw err;
                res.write(result[0].EID.toString());
                res.end();
            })
  
        })

})

var server=app.listen(8080,function()
{
    console.log('server started');
})