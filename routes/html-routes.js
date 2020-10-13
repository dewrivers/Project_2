var db = require("../models");
const express = require('express');
const router = express.Router();


module.exports = function (app) {

    // GET route for landing/home page
    app.get("/", function (req, res) {
        res.render('home')
    });

    //  GET route for marketplace 
    app.get("/marketplace", function (req, res) {
        res.render('marketplace')
    });

    
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

    // Get route for bakery page
<<<<<<< HEAD
    app.get("/bakery", function (req, res) {
        
            db.Food.findAll({
=======
    app.get("/:category", function (req, res) {
        console.log("/bakery route is called")

        db.Food.findAll({
>>>>>>> bad2fddb6111cb6fad0a06f78e353f1148e6fe22
            where: {
                category: "bakery"
            }
<<<<<<< HEAD
        }).then(function (bakeryItems) {
            res.json(bakeryItems)
            ("bakeryItems",bakeryItems);
            // res.render('bakery', bakeryItems);
=======
        }).then(function (results) {
            console.log(results)
            let obj ={
                name: results[0].dataValues.Product_name,
            }
            console.log(obj);
            res.render('bakery',{bakery: results});
>>>>>>> bad2fddb6111cb6fad0a06f78e353f1148e6fe22
        }).catch(function(errr) {
            console.log('err', errr)
        })
        res.render('bakery')
        // db.Bakery.findAll({}).then(function (results) {
        //     res.json(results)
        // });
    });

    // Get route for cheese page
<<<<<<< HEAD
    app.get("/cheese", function (req, res) {
        console.log("here")
        db.Food.findAll({
            where: {
                category: "cheese"
            }
        }).then(function (cheeseItems) {
            // res.json(bakeryItems)
            res.render('cheese', cheeseItems);
        }).catch(function(errr) {
            console.log('err', errr)
        })
        res.render('cheese')
=======
    app.get("/:category", function (req, res) {
        console.log("/cheese route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('cheese', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
>>>>>>> bad2fddb6111cb6fad0a06f78e353f1148e6fe22
    });

    // Get route for dessert page
    app.get("/:category", function (req, res) {
        console.log("/dessert route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('dessert', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });

    // Get route for fish page
    app.get("/:category", function (req, res) {
        console.log("/fish route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('fish', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });

    // Get route for general store page
    app.get("/:category", function (req, res) {
        console.log("/general_store route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('generalstore', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });

    // Get route for meat page
    app.get("/:category", function (req, res) {
        console.log("/meat route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('meat', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });

    // Get route for produce page
    app.get("/:category", function (req, res) {
        console.log("/produce route is called")

        console.log("cat name shoud be  ***** ", req.params.category);

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('produce', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });

    // Get route for wine page
    app.get("/:category", function (req, res) {
        console.log("/wine route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('wine', {results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });





};