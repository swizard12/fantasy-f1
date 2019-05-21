import 'fetch'

var GetDrivers = function() {
    return fetch("http://ergast.com/api/f1/2019/drivers.json").then(data => data.json());
}

module.exports = {
    GetDrivers
}