const express = require('express');

const serveStatic = require("serve-static");

const path = require('path');

const app = express();

app.get('/get', function (req, res) {
    res.send('GET request to the homepage')
})

app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80;

app.listen(port);