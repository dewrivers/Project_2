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
    app.get("/:category", function (req, res) {
        console.log("/bakery route is called")

        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (results) {
            console.log(results)
            let obj ={
                name: results[0].dataValues.Product_name,
            }
            console.log(obj);
            res.render('bakery',{bakery: results});
        }).catch(function(errr) {
            console.log('err', errr)
        })
    });

    // Get route for cheese page
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