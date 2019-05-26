var rest = require('restler');

this.GetDrivers = function(year, callback) {
    var url = "http://ergast.com/api/f1/" + year + "/drivers.json";
    rest.get(url).on('complete', function(response) {
        if (response instanceof Error) {
            console.log(response);
        }
        else {
            return response["MRData"]["DriverTable"]["Drivers"]
        }
    });
}

module.exports = {
    GetDrivers
}