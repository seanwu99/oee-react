var express = require('express');
var app = express();
var opn = require('opn');

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/



// opens the url in the default browser
opn('http://localhost:3000/');