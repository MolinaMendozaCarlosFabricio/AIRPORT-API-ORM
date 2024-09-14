module.exports = (sequelize, DataTypes) => {
    const States = sequelize.define('States', {
        id_states: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        states_name: {
            type: DataTypes.STRING,
        }
    })
    return States;
}