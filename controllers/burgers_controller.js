const express = require("express");
const models = require("../models/burger")

function router(app){
    app.get("/", async function(req,res){
        var availBurger = await models.burgerAvailable();
        var burgDev = await models.burgerDevoured();
        res.render( "index", { availBurger, burgDev })
    }
    )

    app.get("/delete/:id", async function(req, res){
        const devour=await models.delete.id (req.params.id)

        res.redirect("/")
    })

    app.post("/", async function(req,res){
        const add = await models.addBurger(req.body.models)

         res.redirect("/")
    })

}

    module.exports = router;