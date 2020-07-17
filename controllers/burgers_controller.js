const express = require ("express")
const models = require("../models/burger.js")

function getBurgerDb(app){
    app.get("./", async function(req,res){
        var availBurger = await models.burgerAvailable();
        var burgDev = await models.burgerDevoured();
        res.render( 'burger_list', { availBurger, burgDev })
    }
    )}