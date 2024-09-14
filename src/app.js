const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/api', userRoutes);

module.exports = app;