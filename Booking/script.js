const fs = require('node:fs');

fs.appendFile("hey.txt" , "Hello world suh" , function(err){
    if(err) console.error(err);
    else console.log("done");
})