const express = require('express');

const serveStatic = require("serve-static");

const path = require('path');

const app = express();

app.get('/sayhello', function (req, res) {
    res.send("It's a natnatnatnatnatnatnatnatnat")
})

app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80;

app.listen(port);