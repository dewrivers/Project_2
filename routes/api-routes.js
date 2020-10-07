var db = require("../models");


module.exports = function (app) {

    // GET route for landing/home page
    app.get("/", function (req, res) {

    });

    // Get route for market/category homepage (user will be brought here after they input their info on home/landing page. Here they will choose what different market they would like to start shopping from. )
    app.get("/marketplace", function (req, res) {

    });

    // Get route for BAKERY page
    app.get("/marketplace/bakery", function (req, res) {
        db.Bakery.findAll({}).then(function (results) {
            res.json(results)
        });

    });

    // Get route for CHEESE page
    app.get("/marketplace/cheese", function (req, res) {
        db.Cheese.findAll({}).then(function (results) {
            res.json(results)
        });

    });

    // Get route for DESSERT page
    app.get("/marketplace/dessert", function (req, res) {
        db.Dessert.findAll({}).then(function (results) {
            res.json(results)

        });
    });
        // Get route for FISH page
        app.get("/marketplace/fish", function (req, res) {
        db.Fish.findAll({}).then(function (results) {
            res.json(results)
        });
    });
        // Get route for GENERAL STORE page
        app.get("/marketplace/generalstore", function (req, res) {
        db.General_Store.findAll({}).then(function (results) {
            res.json(results)

        });
    });
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
        // Get route for PRODUCE page
        app.get("/marketplace/produce", function (req, res) {
        db.Produce.findAll({}).then(function (results) {
            res.json(results)

        });
    });
        // Get route for WINE page
        app.get("/marketplace/wine", function (req, res) {
        db.Wine.findAll({}).then(function (results) {
            res.json(results)

        });
    });

    // POST route for when a customer starts their order to add to database
    app.post("/", function (req, res) {

    });

    // DELETE route for deleting finished/picked up orders
    app.delete("/", function (req, res) {

    })

    // PUT route for updating order during shopping process
    app.put("/", function (req, res) {

    });



    // Get route for CHECKOUT page
    app.get("/checkout", function (req, res) {

    });

    // Get route for CONTACT page
    app.get("/contact", function (req, res) {

    });

};