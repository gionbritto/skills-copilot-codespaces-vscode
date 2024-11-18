// Create web server
// npm install express
// npm install body-parser

// 1. Load module
var express = require('express');
var bodyParser = require('body-parser');

// 2. Create web server
var app = express();

// 3. Set middleware
app.use(bodyParser.urlencoded({extended: false}));

// 4. Set router
app.get('/comment', function(req, res){
    res.send('<h1>Comment page</h1>');
});

app.post('/comment', function(req, res){
    res.send('<h1>Comment page</h1>' + req.body.comment);
});

// 5. Launch web server
app.listen(3000, function(){
    console.log('Server is running...');
});