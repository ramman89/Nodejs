let fs=require('fs');
let util=require('util');

//let rspromise=new Promise((resolve,reject)=>
function rspromise() 
{
 return new Promise((resolve,reject)=>
  {
    fs.readFile('./ram.txt','utf8',(err,data)=>
    {
      if(err)
      reject(err);
  else
  resolve('hai');
    })
  })
}


async function main()
{
  console.log(1);
   rspromise().then(x=>{console.log(x)}).catch(e=>{console.log('err:'+e)});
  console.log(2);
  
}

main();