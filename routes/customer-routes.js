var db = require("../models");


module.exports = function (app) {


// POST route for when a customer starts their order to add to database
    app.post("/api/customerorder", function (req, res) {
        console.log(req.body)

        db.Customer_order.create({
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            Phone_number: req.body.Phone_number,
            Cart_id: req.body.Cart_id
        }).then(function(dbCustomerOrder){
            res.json(dbCustomerOrder)
        });
    });

    // PUT route for updating order during shopping process thru the CART_ID????
    app.put("/api/customerorder", function (req, res) {
        db.Customer_order.update({
            where: {
                Cart_id: req.body.Cart_id
            }

        }).then(function(dbCustomerOrder){
            res.json(dbCustomerOrder)
        });

    });

        // DELETE route for deleting finished/picked up orders
        app.delete("/api/customerorder/:id", function (req, res) {
            db.Customer_order.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function(dbCustomerOrder){
                res.json(dbCustomerOrder)
            });
        });








}