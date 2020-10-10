const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Requiring models folder for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Static directory
app.use(express.static("public"));

// Handlebars business
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/bakery-routes.js")(app);


app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


// Syncing sequelize models and then starting Express app
db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("Server running on PORT " + PORT);
  });
});

