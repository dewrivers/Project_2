var db = require("../models");


module.exports = function (app) {

    // GET route for landing/home page
    app.get("/", function (req, res) {
        res.render('index')
    });


    app.get("/order", function (req, res) {
        res.render('order')
    });


};