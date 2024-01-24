const express = require("express");
const {getProperty, postProperty,createUser} = require("../controller/control.js");
const propertyRouter = express.Router();
const userRouter = express.Router();

propertyRouter
.route("/")
.get(getProperty)
.post(postProperty);

userRouter
.route("/")
.post(createUser);

module.exports = {propertyRouter, userRouter};
