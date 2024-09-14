module.exports = (sequelize, DataTypes) => {
    const Municipalitys = sequelize.define('Municipalitys', {
        id_municipalitys: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        municipalitys_name: {
            type: DataTypes.STRING,
        }
    })
    return Municipalitys;
}