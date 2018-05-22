var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
