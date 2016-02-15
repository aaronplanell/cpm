var os = require('os');
var express = require('express');
var router = express.Router();

//Set the global debug parameter
global.debug = false;
if (os.hostname() === "multivac") 
	debug = true;

//Load the controller
global.cpmController = require('../controllers/cpm_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Comparador de prediccions municipals' });
});

module.exports = router;

//Show the data
if (global.debug) {
	console.log(cpmController.getMetadataId('080898'));
	console.log(cpmController.getForecastId('080898'));
}