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
    },{ timestamps: false },);

    States.associate = function(models) {
        States.hasMany(models.Ubications, {
            foreignKey: 'id_states'
        });
    }

    return States;
}