module.exports = (sequelize, DataTypes) => {
    const Passengers = sequelize.define('Passengers', {
        id_passenger: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name_passenger: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middle_name_passenger: {
            type: DataTypes.STRING,
            allowNull: true
        },
        first_surname_passenger: {
            type: DataTypes.STRING,
            allowNull: false
        },
        second_surname_passenger: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number_passenger: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },

        id_flight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Flights',
                key: 'id_flight' 
            }
        },

        id_gender: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Genders',
                key: 'id_genres' 
            }
        },

        id_nationality: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Nationalitys',
                key: 'id_nationalitys' 
            }
        },

        seat_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Seatings',
                key: 'seat_number' 
            }
        },

        id_checkin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CheckIns',
                key: 'id_checkin' 
            }
        }

    });

    Passengers.associate = function(models) {
        Passengers.belongsTo(models.Flights, {
            foreignKey: 'id_flight'
        });

        Passengers.belongsTo(models.Genders, {
            foreignKey: 'id_gender'
        });

        Passengers.belongsTo(models.Nationalitys, {
            foreignKey: 'id_nationality'
        });

        Passengers.belongsTo(models.Seating, {
            foreignKey: 'seat_number'
        });

        Passengers.belongsTo(models.CheckIns, {
            foreignKey: 'id_checkin'
        });
    }

    return Passengers;
};