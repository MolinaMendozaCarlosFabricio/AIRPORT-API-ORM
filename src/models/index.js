const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.Users = require('./users.model')(sequelize, Sequelize);
db.Passengers = require('./passengers.model')(sequelize, Sequelize);
db.Ubications = require('./ubications.model')
db.Countrys = require('./countrys')(sequelize, Sequelize);
db.States = require('./states')(sequelize, Sequelize);
db.Municipalitys = require('./municipalitys')(sequelize, Sequelize);
db.Genders = require('./genders')(sequelize, Sequelize);
db.TypeSeats = require('./typeseats.model')(sequelize, Sequelize);
db.SeatingAreas = require('./seatingareas.model')(sequelize, Sequelize);
db.Holders = require('./holders.model')(sequelize, Sequelize);

module.exports = db;