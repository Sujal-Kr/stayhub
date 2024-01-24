const propertyRouter = require("express").Router();
const { getProperty , postProperty } = require("../controller/propertyController");

propertyRouter
.route("/property")
.get(getProperty)
.post(postProperty);

module.exports = propertyRouter;
