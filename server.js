const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8000;

// Requiring models folder for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Handlebars business
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// escaping quotes to dynamically add image files into path
var hbs = exphbs.create({});
hbs.handlebars.registerHelper('escape', function(variable) {
  return variable.replace(/(['"])/g, '\\$1');
});

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Syncing sequelize models and then starting Express app
db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("Server running on PORT " + PORT);
  });
});

