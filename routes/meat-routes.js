var db = require("../models");


module.exports = function (app) {


        // Get route for MEAT page
        app.get("/marketplace/meat", function (req, res) {
            db.Meat.findAll({}).then(function (results) {
                res.json(results)
    
            });
        });


            // Get route for MEAT by Product_name
            app.get("/marketplace/meat/:Product_name", function (req, res) {
                db.Meat.findAll({
                    where: {
                        Product_name: req.params.Product_name
                    }
                }).then(function (results) {
                    res.json(results)
                    
                    });
            });





    }