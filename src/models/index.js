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
db.Ubications = require('./ubications.model')(sequelize, Sequelize);
db.Countrys = require('./countrys')(sequelize, Sequelize);
db.States = require('./states.model')(sequelize, Sequelize);
db.Municipalitys = require('./municipalitys')(sequelize, Sequelize);
db.Genders = require('./genders')(sequelize, Sequelize);
db.TypeSeats = require('./typeseats.model')(sequelize, Sequelize);
db.Holders = require('./holders.model')(sequelize, Sequelize);
db.Nationalitys = require('./nationalitys.model')(sequelize, Sequelize);
db.ReservationStatus = require('./reservationstatus.model')(sequelize, Sequelize);
db.Reservation = require('./reservations.model')(sequelize, Sequelize);
db.Cards = require('./cards.model')(sequelize, Sequelize);
db.CheckInStatus= require('./checkinstatus.model')(sequelize, Sequelize);
db.Seating= require('./seating.model')(sequelize, Sequelize);
db.SeatingStatus = require('./seatingstatus.model')(sequelize, Sequelize);
db.SeatingAreas = require('./seatingareas.model')(sequelize, Sequelize);
db.CheckIns= require('./checkins.model')(sequelize, Sequelize);
db.Flights= require('./flights.model')(sequelize, Sequelize);
db.Passengers = require('./passengers.model')(sequelize, Sequelize);

// Configurar asociaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

module.exports = db;
