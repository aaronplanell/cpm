var isodate = require("isodate");

//Log enter
if (global.debug) console.log("#### Inside of cpm_controller.js");

// Read the JSON files
var jsonMetadata = require("../data/metadades_municipis.json");
var jsonForecast = require("../data/prediccions_municipals.json");

//Return all the data
exports.getMetadata = function() {
	return jsonMetadata;
};

exports.getForecast = function() {
	return jsonForecast;
};

//Return a specific Id
exports.getMetadataId = function(id) {
    for (i = 0; i < jsonMetadata.length; i++) {
        if (jsonMetadata[i].codi === id) {
            return jsonMetadata[i];
        }
    }
    return -1;	
};

exports.getForecastId = function(id) {
    for (i = 0; i < jsonForecast.length; i++) {
        if (jsonForecast[i].codi === id) {
            return jsonForecast[i];
        }
    }
    return -1;	
};

//Return a specific Id & Date forecast
exports.getForecastIdDate = function(id, date) {
    
    //Get the current forecast
    var currForecast = cpmController.getForecastId(id);
    if(currForecast===-1) return -1;  

    //Get the array of days
    var dies = currForecast.dies;
    for (i = 0; i < dies.length; i++) {
        var currDate = isodate(dies[i].data);
        if (currDate.toString() === date.toString()) {
            return dies[i].variables;
        }
    }

    return -1;
};

//API REST
exports.index = function (req, res) {
    var metadata = cpmController.getMetadata();
    if (metadata!==-1)
        res.render('municipis/index', {municipis: metadata, errors: []});
    else 
        res.render('municipis/index', {municipis: [], errors: []});
}

//Log enter
if (global.debug) console.log("#### Outside of cpm_controller.js");

