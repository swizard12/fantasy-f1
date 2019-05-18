var mysql = require('mysql');

var GetTeams = function() {
    return new Promise(function(resolve, reject) {
        var con = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
        var sql = "SELECT * FROM teams";
        con.query(sql, function(err, rows, fields) {
            if(err) {
                return reject(err);
            }
            resolve(rows);
        })
    });
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