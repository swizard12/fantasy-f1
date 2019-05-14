const express = require("express");
const serveStatic = require("serve-static")
const path = require('path');

const db = require("/models");
const apiDriver = require("/app/api/driver");
const apiTeam = require("/app/api/team");

const app = express();
app.use(bodyParser.json());

apiDriver(app, db);
apiTeam(app, db);

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/driver', apiDriver);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.use(serveStatic(path.join(__dirname, '/dist')));
const port = process.env.PORT || 8080;

app.listen(port);