var express = require( 'express' );
var nunjucks = require( 'nunjucks' );
var app = express(); 

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html', locals, function(err, output) {
    console.log(output);
})

app.use('/special/', function (req, res, next) {
    console.log('you reached the special area', req.method);
    next();
})

app.use(function (req, res, next) {
    console.log('this is our middleware', req.method);
    next();
})

app.get('/', function (req, res) {
    res.render('index', locals);
})

app.listen(3000, function() {
    console.log('server listening');
});