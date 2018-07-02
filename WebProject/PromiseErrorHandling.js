let sleep=require('system-sleep');
function promisifiedfunction(val)
{
return new Promise((resolve,reject)=>
{
    if(val==1)
    {
       
        // (async()=>
        // {
        //     console.log(1);
        //     sleep(10000);
        //    console.log(2);
        // })();
        console.log('x');
        resolve('hai');    
    }

else
reject(new Error('My error'));

})
}
console.log(1);
promisifiedfunction(1)
.then(promisifiedfunction(1))
.then(promisifiedfunction(1))
.then(promisifiedfunction(1))
.then(promisifiedfunction(1))
.then(x=>{return new Error('Oops');}).catch(e=>{console.log(e)});

console.log(2);
//.then(x=>{console.log(x);return x})
//.then(()=>promisifiedfunction()).catch(x=>{console.log(x);return x})

//promisifiedfunction().then(x=>{console.log(x);return x})
