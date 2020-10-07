var db = require("../models");


module.exports = function (app) {


        // Get route for DESSERT page
        app.get("/marketplace/dessert", function (req, res) {
            db.Dessert.findAll({}).then(function (results) {
                res.json(results)
    
            });
        });








    }