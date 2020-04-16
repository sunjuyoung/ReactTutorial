var fs = require('fs');


//readFileSync
console.log('A');
fs.readFileSync('syntax/sample.txt','utf8', (err,result)=>{
    console.log(result);
});
console.log('c');
