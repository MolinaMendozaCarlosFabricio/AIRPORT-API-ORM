module.exports = (sequelize, DataTypes) => {
    const Countrys = sequelize.define('Countrys', {
        id_countrys: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        country_name: {
            type: DataTypes.STRING,
        }
    },{ timestamps: false },);

    Countrys.associate = function(models) {
        Countrys.hasMany(models.Ubications, {
            foreignKey: 'country_id'
        });
    }

    return Countrys;
};
