module.exports = (sequelize, DataTypes) => {
    const Genders = sequelize.define('Genders', {
        id_genres: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        genres_name: {
            type: DataTypes.STRING,
        }
    });

    Genders.associate = function(models) {
        Genders.hasMany(models.Passengers, {
            foreignKey: 'id_gender'
        })
    }

    return Genders;
}