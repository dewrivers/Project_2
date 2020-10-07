var db = require("../models");


module.exports = function (app) {





// Get route for FISH page
        app.get("/marketplace/fish", function (req, res) {
            db.Fish.findAll({}).then(function (results) {
                res.json(results)
            });
        });








    }