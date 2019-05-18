const express = require('express');

var F1 = require ('./api/f1');

var d1 = new F1.Driver(1, 'Louis', 120);

const serveStatic = require("serve-static");

const path = require('path');

const app = express();

app.get('/sayhello', function (req, res) {
    res.send("It's a natnatnatnatnatnatnatnatnat")
})

app.get('/driver', function(req, res) {
    res.send(d1)
})

app.get('/teams', function (req, res) {
    F1.GetTeams().then(function(rows) {
        res.send(rows)
    }).catch((err) => setImmediate(() => { res.send("Error") }))
})
gf
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80;

app.listen(port);