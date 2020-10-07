var db = require("../models");


module.exports = function (app) {



    // Get route for CHEESE page
    app.get("/marketplace/cheese", function (req, res) {
        db.Cheese.findAll({}).then(function (results) {
            res.json(results)
        });

    });









}