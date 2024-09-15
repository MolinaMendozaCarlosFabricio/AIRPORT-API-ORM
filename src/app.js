const express = require('express');
const bodyParser = require('body-parser');
const flightRoutes = require('../src/router/flights.router');
const userRoutes = require('./router/users.router')
const ubicationRoutes = require('./router/ubications.router')

const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/users', userRoutes);
app.use('/ubications', ubicationRoutes);
app.use('/flights',flightRoutes);

module.exports = app;