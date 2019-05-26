const request = require('request');

module.exports = {
    API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
              if (err) reject(err)
              console.log(body)
              resolve(body)
            });
        })
    }
}