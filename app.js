var express = require( 'express' );
var app = express(); 

app.use('/special/', function (req, res, next) {
    console.log('you reached the special area', req.method);
    next();
})

app.use(function (req, res, next) {
    console.log('this is our middleware', req.method);
    next();
})

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.listen(3000, function() {
    console.log('server listening');
});