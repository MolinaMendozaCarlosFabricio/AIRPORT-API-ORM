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
    return Nationalitys;
}