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
