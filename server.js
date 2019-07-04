const express = require('express');
const serveStatic = require("serve-static")
const asyncHandler = require('express-async-handler')
const nFetch = require ('node-fetch')

const path = require('path');

const app = express();

app.get('/sayhello', function (req, res) {
    res.send("It's a natnatnatnatnatnatnatnatnat")
})

app.get('/driver',asyncHandler(async (req, res, next) => {
    const response = await nFetch("http://ergast.com/api/f1/2010/drivers.json")
    const json = await response.json()
    res.send(json)
}))

app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80;

app.listen(port);