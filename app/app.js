const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const {requestBodySize} = require('../config')

const myRoute = require('./routes/my-route');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: requestBodySize }));
app.use(bodyParser.urlencoded({ limit: requestBodySize, extended: true }));

app.use('/my-app', express.static( path.join(__dirname, '../public/my-new-proyect')));


app.use(`/person`, myRoute);

module.exports = app;