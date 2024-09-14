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

db.Countrys = require('./countrys')(sequelize, Sequelize);
db.States = require('./states')(sequelize, Sequelize);
db.Municipalitys = require('./municipalitys')(sequelize, Sequelize);
db.Genders = require('./genders')(sequelize, Sequelize);
db.Nationalitys = require('./nationalitys')(sequelize, Sequelize);
db.SeatingStatus= require('./seatingStatus')(sequelize, Sequelize);

module.exports = db;