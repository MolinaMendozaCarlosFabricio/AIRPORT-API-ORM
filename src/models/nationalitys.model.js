module.exports = (sequelize, DataTypes) => {
    const Nationalitys = sequelize.define('Nationalitys', {
        id_nationalitys: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nationalitys_name: {
            type: DataTypes.STRING,
        }
    })

    Nationalitys.associate = function(models) {
        Nationalitys.hasMany(models.Passengers, {
            foreignKey: 'id_nationality'
        });
    }

    return Nationalitys;
}