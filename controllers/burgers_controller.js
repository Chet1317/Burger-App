const express = require("express");
var router = express.Router();
const models = require("../models/burger");

router.get("/", async function (req, res) {
  var availBurger = await models.burgerAvailable();
  var burgDev = await models.burgerDevoured();
  res.render("index", {availBurger, burgDev});
});

router.get("/devoured/:id", async function (req, res) {
  const devoured = await models.burgerDevour(req.params.id);

  res.redirect("/");
});

router.post("/", async function (req, res) {
  const add = await models.addBurger(req.body);

  res.redirect("/");
});

module.exports = router;
