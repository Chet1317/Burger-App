const express = require ("express")
const models = require("../models/burger")

function getBurgerDb(app){
    app.get("/", async function(req,res){
        var availBurger = await models.burgerAvailable();
        var burgDev = await models.burgerDevoured();
        res.render( 'index.handlebars', { availBurger, burgDev })
    }
    )
    app.post("/", async function(req,res){
         await models.addBurger(req.body.models)
    })

}

    models.exports = getBurgerDb