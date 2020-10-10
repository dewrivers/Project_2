var db = require("../models");


module.exports = function (app) {

    // GET route for landing/home page
    app.get("/", function (req, res) {
        res.render('home')
    });

    //  GET route for marketplace 
    app.get("/marketplace", function (req, res) {
        res.render('marketplace')
    });

    // Get route for bakery page
    // app.get("/bakery", function (req, res) {
    //     db.Food.findAll({
    //         where: {
    //             category: req.params.category
    //         }
    //     }).then(function (bakeryItems) {
    //         // res.json(bakeryItems)
    //         res.render('bakery', bakeryItems);
    //     }).catch(function(errr) {
    //         console.log('err', errr)
    //     })
    // });

    app.get("/bakery", function (req, res) {
        
            db.Food.findAll({
            where: {
                category: "bakery"
            }
        }).then(function (bakeryItems) {
            // res.json(bakeryItems)
            res.render('bakery', bakeryItems);
        }).catch(function(errr) {
            console.log('err', errr)
        })
        res.render('bakery')
        // db.Bakery.findAll({}).then(function (results) {
        //     res.json(results)
        // });
    });

    // Get route for cheese page
    app.get("/cheese", function (req, res) {
        console.log("here")
        res.render('cheese')
    });

    // Get route for dessert page
    app.get("/dessert", function (req, res) {
        res.render('dessert')
    });

    // Get route for fish page
    app.get("/fish", function (req, res) {
        res.render('fish')
    });

    // Get route for general store page
    app.get("/general_store", function (req, res) {
        res.render('generalstore')
    });

    // Get route for meat page
    app.get("/meat", function (req, res) {
        res.render('meat')
    });

    // Get route for produce page
    app.get("/produce", function (req, res) {
        res.render('produce')
    });

    // Get route for wine page
    app.get("/wine", function (req, res) {
        res.render('wine')
    });





};