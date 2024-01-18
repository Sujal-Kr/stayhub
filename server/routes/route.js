const express = require('express');
const getProperty= require('../controller/control.js')
const propertyRouter = express.Router();
propertyRouter
.route('/')
.get(getProperty);
module.exports=propertyRouter;