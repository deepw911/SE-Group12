const express = require('express');
const app = express();

const PORT = 80;






app.listen(PORT, (err)=>{
    if(err){
        console.log('Error: ', err);
    }
    else{
        console.log('Server running fine  on port: ', PORT);
    }
});