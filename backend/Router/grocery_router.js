const express = require("express");
const { AddItem, getAllItem } = require("../controller/grocery_controller");

const Grocery_Router = express.Router();

Grocery_Router.post("/add", AddItem);

Grocery_Router.get("/all", getAllItem);

module.exports = Grocery_Router;
