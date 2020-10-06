var db = require("../models");

module.exports = function (app) {

    // GET route for landing/home page
    app.get("/", function (req, res) {

    });

    // Get route for market/category homepage (user will be brought here after they input their info on home/landing page. Here they will choose what different market they would like to start shopping from. )
    app.get("/marketplace", function (req, res) {
        
    });

    // Get route for BAKERY page
    app.get("/bakery", function (req, res) {
        db.Bakery.findAll({}).then(function(dbBakery){
            res.json(dbBakery)
        });
    
    });

        // Get route for CHEESE page
        app.get("/marketplace/cheese", function (req, res) {
    
        });
    
        // Get route for DESSERT page
        app.get("/marketplace/dessert", function (req, res) {
    
        });

        // Get route for FISH page
        app.get("/marketplace/fish", function (req, res) {
    
        });

        // Get route for GENERAL STORE page
        app.get("/marketplace/generalstore", function (req, res) {
    
        });

        // Get route for MEAT page
        app.get("/marketplace/meat", function (req, res) {
    
        });

        // Get route for PRODUCE page
        app.get("/marketplace/produce", function (req, res) {
    
        });

        // Get route for WINE page
        app.get("/marketplace/wine", function (req, res) {
    
        });


    // POST route for when a customer starts their order to add to database
    app.post("/", function (req, res) {
    
    });

    // DELETE route for deleting finished/picked up orders
    app.delete("/", function (req, res) {
    
    });

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