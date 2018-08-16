
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose'),
employee     = require('./models/employee') //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl,{ useNewUrlParser: true });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(server); //register the route

server.listen((process.env.PORT ||3000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});