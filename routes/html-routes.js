var db = require("../models");
const express = require('express');
const router = express.Router();


module.exports = function (app) {

    // GET route for landing/home page
    app.get("/", function (req, res) {
        res.render('home')
    });

    // GET route for register page
    app.get("/register", function (req, res) {
        res.render('register')
    });


    //  GET route for marketplace 
    app.get("/marketplace", function (req, res) {
        res.render('marketplace')
    });

<<<<<<< HEAD
    //  GET route for contact us 
    app.get("/contact", function (req, res) {
        res.render('contact')
    });

    //  GET route for cart page 
    app.get("/cart", function (req, res) {
        res.render("cart")
=======
    
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
>>>>>>> 37c4f8fbb0facc9b33fcf9ee3c675f687b02b271
    });

    // Get route for food pages
    app.get("/:category", function (req, res) {
        console.log("category route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            res.render('bakery', { food: results });
        }).catch(function (errr) {
            console.log('err', errr)
        })
    });

    app.get("/cart/:customerId", function (req, res) {
        console.log("customer ID route is called")

        db.Cart.findAll({
            where: {
                CustomerId: req.params.customerId
            }
        }).then(function (results) {
            console.log(results)
            res.render('cart', { products: results });
            

            for(var i = 0; i < results.length; i ++) {
                var total = 0;
                total += 
                console.log("CUSTOMER results", results);
                console.log("total", total)
            }
        }).catch(function (errr) {
            console.log('err', errr)
        })
    });

};