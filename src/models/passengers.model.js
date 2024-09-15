module.exports = (sequelize, DataTypes) => {
    const Passengers = sequelize.define('Passenger', {
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
        }
    });

    return Passengers;
};