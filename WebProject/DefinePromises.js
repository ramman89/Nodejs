let fs=require('fs');
let util=require('util');

let rspromise=new Promise((resolve,reject)=>
{
  fs.readFile('./ram.txt','utf8',(err,data)=>
  {
    if(err)
    reject(err);
else
resolve(data);
  })
})

async function main()
{
  console.log(1);
  await rspromise.then(x=>{console.log(x)});
  console.log(2);
  
}

main();