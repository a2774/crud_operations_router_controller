const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');

const router = require('./routers/bookRouter');
const db = require('./config/mongoose');
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, function(err){
    if(err){
        console.log('server is err on port', 8000);
    }
    console.log('Server is running on port', 8000);
})