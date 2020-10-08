var db = require("../models");


module.exports = function (app) {

    console.log('bakery routes load!!')


    // Get route for BAKERY ITEM BY ID
    app.get("/marketplace/bakery/:id", function (req, res) {
        console.log('we hit the route!!')
        db.Bakery.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results)
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });
    // Get route for ALL BAKERY 
    app.get("/marketplace/bakery", function (req, res) {
        db.Bakery.findAll({}).then(function (results) {
            res.json(results)
        });
    });

    













}