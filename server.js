const express = require('express');
const api_helper = require('./api/helper');

const serveStatic = require("serve-static");

const path = require('path');

const app = express();

app.get('/sayhello', function (req, res) {
    res.send("It's a natnatnatnatnatnatnatnatnat")
})

app.get('/driver', function(req, res) {
    await api_helper.API_call('http://ergast.com/api/f1/2010/drivers.json')
    .then(response => {
        res.send(response.json())
    })
    .catch(error => {
        res.send(error)
    })
})

app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80;

app.listen(port);