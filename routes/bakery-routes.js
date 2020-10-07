var db = require("../models");


module.exports = function (app) {

    // Get route for BAKERY page
    app.get("/marketplace/bakery", function (req, res) {
        db.Bakery.findAll({}).then(function (results) {
            res.json(results)
        });

    });











}