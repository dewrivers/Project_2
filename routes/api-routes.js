var db = require("../models");


module.exports = function (app) {

    // GET route for specific category/market data
    app.get("search/:category", function (req, res) {

        console.log('we hit the route!!')
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

    // app.get("/search/:category/:id", function (req, res) {

    //     console.log('we hit the route!!')
    //     db.Food.findAll({
    //         where: {
    //             category: req.params.category,
    //             id: req.params.id
    //         }
    //     }).then(function (results) {
    //         res.json(results)
    //     }).catch(function(err) {
    //         console.log('err', err)
    //     })

    // });



};