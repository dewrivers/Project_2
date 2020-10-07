var db = require("../models");


module.exports = function (app) {



        // Get route for PRODUCE page
        app.get("/marketplace/produce", function (req, res) {
            db.Produce.findAll({}).then(function (results) {
                res.json(results)
    
            });
        });







    }