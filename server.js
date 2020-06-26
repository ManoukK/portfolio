const express = require('express')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('static'));

app.get('/', function(req, res){
    res.render('main')
})

app.get('/about', function(req, res){
    res.render('about')
})

app.get('/cv', function(req, res){
    res.render('cv')
})


app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});