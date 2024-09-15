module.exports = (sequelize, DataTypes) => {
    const Ubications = sequelize.define('Ubications', {
        id_ubication: {
            type: DataTypes.INTERGER,
            autoIncrement: true,
            primaryKey: true,
        },
        airport_name_ubication: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Ubications;
};