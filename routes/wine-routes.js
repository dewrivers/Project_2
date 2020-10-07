var db = require("../models");


module.exports = function (app) {



        // Get route for WINE page
        app.get("/marketplace/wine", function (req, res) {
            db.Wine.findAll({}).then(function (results) {
                res.json(results)
    
            });
        });






    }