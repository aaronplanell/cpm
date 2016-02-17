var os = require('os');
var express = require('express');
var router = express.Router();

//Set the global debug parameter
global.debug = false;
if (os.hostname() === "multivac") 
	debug = true;

//Log enter
if (global.debug) console.log("#### Inside of index.js");

//Load the controller
global.controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comparador de prediccions municipals' });
});

//API REST
router.get("/municipis/metadades", controller.metadades);
router.get("/municipis/:uid", controller.municipi);

//Export
module.exports = router;

//Debug the data
if (global.debug) {
	console.log("\r\n getMetadataId:");
	console.log(controller.getMetadataId('080898'));
	console.log("\r\n getForecastId:");
	console.log(controller.getForecastId('080898'));
	console.log("\r\n getForecastIdDate:");
	console.log(controller.getForecastIdDate('080898', new Date(2016, 0, 1)));
}

//Log exit
if (global.debug) console.log("#### Outside of index.js");
