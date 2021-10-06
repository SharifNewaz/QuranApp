var express = require('express');
var router = express.Router();
var {getAbout, getAbout2}= require('../controllers/aboutControllers') //this is the way you import a function

router.get('/', getAbout);

//the foolowing is imported from the aboutController.js file
getAbout2()

module.exports = router