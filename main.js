console.log(1 + 1);

const apiController = require('./src/controllers/ApiController')
const express = require('express');
const app = express();

app.use(express.json());
app.listen(1337, (req, res) => {
    console.log('Express server listening on port 1337');
});

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    console.log(req.body);
    next();
})

app.use('/api',apiController);

app.get('/',(req,res) =>{
    res.sendFile(/Users/ + 'index.html');
})