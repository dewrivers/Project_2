var db = require("../models");

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

    //  GET route for contact us
    app.get("/contact", function (req, res) {
        res.render('contact')
    });

    //  GET route for cart page
    app.get("/cart", function (req, res) {
        res.render("cart")
    });

    // Get route for food pages
    app.get("/search/page/:category", function (req, res) {
        console.log("category route is called")
        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
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

            var total = 0;
            for(var i = 0; i < results.length; i ++) {
                total += parseInt(results[i].dataValues.Cost)
            }
            
            var newTotal = total;
            res.render('cart', { products: results, newTotal });
        }).catch(function (errr) {
            console.log('err', errr)
        })
    });


    app.delete("/cart/customerId/:foodId", function (req, res) {
        console.log("HTML DELETE route is called", req.params.FoodId )
        db.Cart.destroy({
            where: {
                
                foodId: req.params.foodId
            }
        }).then(function (results) {
            console.log(results)
            res.render('cart', { products: results});
        }).catch(function (errr) {
            console.log('err', errr)
        })
    });
};

