let fs=require('fs');
let promise=require('promise');

let readFilePro = function(filename){
    return new Promise(function(resolve, reject) {
      fs.readFile(filename,'utf8', (err, data)=>  {
        //if(err) reject(err);
       // resolve(data)
      })
    })
  }

readFilePro('./index.html').then(x=>{
    console.log(x);
})