module.exports = (sequelize, DataTypes) => {
    const Municipalitys = sequelize.define('Municipalitys', {
        id_municipality: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        municipalitys_name: {
            type: DataTypes.STRING,
        }
    }, { timestamps: false });

    Municipalitys.associate = function(models) {
        Municipalitys.hasMany(models.Ubications, {
            foreignKey: 'id_municipality'
        });
    };

    return Municipalitys;
};
