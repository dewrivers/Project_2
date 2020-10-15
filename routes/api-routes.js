var db = require("../models");


module.exports = function (app) {

    // GET route for specific category/market data
    app.get("search/:category", function (req, res) {

        console.log('we hit the GET route!!')
        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            res.json(results)
        }).catch(function(errr) {
            console.log('err', errr)
        })

    });


    // POST route for when a customer starts their order to add to database....posting customer info to CUSTOMERS TABLE
    app.post("/api/customerorder", function (req, res) {
        console.log('we hit the routeee')
        
        db.Customer.create({
            Whole_name: req.body.Whole_name,
            email: req.body.email,
            Phone_number: req.body.Phone_number,
            Cart_id: req.body.Cart_id
        }).then(function(customer){
            res.json(customer)
        });
    });


// POST for adding cart info to database...posting cart info to CART TABLE
    app.post("/api/addtocart", function (req, res) {
        console.log("post happening", req.body)

        db.Cart.create({
            Product_name: req.body.Product_name,
            Cost: req.body.Cost,
            CustomerId: parseInt(req.body.customerId),
            FoodId: parseInt(req.body.foodId)
        }).then(function(results){
            res.json(results)
        });
    });

    // GET route for Cart info
    app.get("cart/:Customerid", function (req, res) {

        console.log('we hit the route!!')
        db.Food.findAll({
            where: {
                CustomerId: req.params.CustomerId
            }
        }).then(function (results) {
            res.json(results)
        }).catch(function(errr) {
            console.log('err', errr)
        })

    });



};