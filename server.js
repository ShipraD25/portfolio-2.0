var express = require("express");


//var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//var apiRoutes = require("./controllers/api_routes");
//app.use(apiRoutes);

//var htmlRoutes = require("./controllers/html_routes.js");
//app.use(htmlRoutes);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});