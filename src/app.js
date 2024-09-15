const express = require('express');
const bodyParser = require('body-parser');
const flightRoutes = require('../src/router/flights.router');

const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/flights',flightRoutes);

module.exports = app;