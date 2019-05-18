var mysql = require('mysql');

var con = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

var GetTeams = function() {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM teams", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        })
    })
}

var Driver = function(_id, _name, _value) {
    this.id = _id,
    this.name = _name,
    this.value = _value
};

module.exports = {
    Driver,
    GetTeams
}