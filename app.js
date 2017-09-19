const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express(); 

const routes = require('./routes');
app.use('/', routes);

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html')

app.use(express.static('public'))

app.use(function (req, res, next) {
    console.log('this is our middleware', req.method);
    next();
})

app.listen(3000, function() {
    console.log('server listening');
});