var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Car = require('./app/models/car'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbit');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.append('Access-Control-Allow-Methods', 'DELETE')
    res.append('Access-Control-Allow-Methods', 'PUT')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./app/routes/routes');
routes(app);

app.listen(8000);