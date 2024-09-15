module.exports = (sequelize, DataTypes) => {
    const Ubications = sequelize.define('Ubications', {
        id_ubication: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        airport_name_ubication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_country: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Countrys',
                key: 'id_countrys'
            }
        }
    });

    return Ubications;
};