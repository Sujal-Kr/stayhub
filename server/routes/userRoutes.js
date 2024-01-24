const userRouter = require("express").Router();
const { createUser } = require("../controller/userController");

userRouter
.route("/user")
.post(createUser);

module.exports = userRouter;