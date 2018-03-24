//Required packages for server.js
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require('express-handlebars');

//Sets up port
var PORT = process.env.PORT || 3000;

//Initializes app
var app = express();

//Gets the routes
var routes = require('./routes/index');

//Sets up what middleware the express app uses.
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(routes.apiRoutes);
app.use(routes.viewRoutes);

//Sets view engine to handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articlesdb";
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});