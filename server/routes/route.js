const express = require('express');
const {getProperty,postProperty}= require('../controller/control.js')
const propertyRouter = express.Router();
propertyRouter
.route('/')
.get(getProperty)
.post(postProperty)
module.exports=propertyRouter;