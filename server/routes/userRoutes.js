const userRouter = require("express").Router();
const { createUser, logIn } = require("../controller/userController");


userRouter
.route("/")
.post(logIn);


userRouter
.route("/user")
.post(createUser);



module.exports = userRouter;