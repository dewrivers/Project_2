var db = require("../models");


module.exports = function (app) {



            // Get route for GENERAL STORE page
            app.get("/marketplace/generalstore", function (req, res) {
                db.General_Store.findAll({}).then(function (results) {
                    res.json(results)
        
                });
            });












        }