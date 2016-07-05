var express = require('express');
var compress = require('compression');

var app = express();
// static
app.use(compress({
    level: 9
})); 
app.use("/", express.static(__dirname + '/'));
// listen
app.listen(process.env.PORT || 8888);