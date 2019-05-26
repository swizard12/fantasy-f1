const express = require('express');
const api_helper = require('./api/helper');
var F1 = require ('./api/f1');
var ergast = require ('./api/ergast');

const serveStatic = require("serve-static");

const path = require('path');

const app = express();

app.get('/sayhello', function (req, res) {
    res.send("It's a natnatnatnatnatnatnatnatnat")
})

app.get('/driver', function(req, res) {
    api_helper.API_call('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        res(json.response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/teams', function (req, res) {
    F1.GetTeams().then(function(rows) {
        res.send(rows)
    }).catch((err) => setImmediate(() => { res.send(err) }))
})

app.get('/drivers', function(res) {
    ergast.GetDrivers().then(function(data) {
        res.send(data)
    });
})

app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80;

app.listen(port);