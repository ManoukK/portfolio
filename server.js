const express = require('express')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 5000;
const revManifest = require('./static/rev-manifest');

app.use(/.*-[0-9a-f]{10}\..*/, function(req, res, next){
    res.header('Cache-Control', 'max-age=365000000');
    next();
})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('static'));

app.get('/', function(req, res){
    res.render('main', { revManifest })
})

app.get('/about', function(req, res){
    res.render('about', { revManifest })
})

app.get('/cv', function(req, res){
    res.render('cv', { revManifest })
})

app.get('/offline', function(req, res){
    res.render('offline', { revManifest })
});


app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});