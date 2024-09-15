module.exports = (sequelize, DataTypes) => {
    const SeatingStatus = sequelize.define('SeatingStatus', {
        id_seating_status: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        seating_status_name: {
            type: DataTypes.STRING,
        }
    },{ timestamps: false },);

    SeatingStatus.associate = function(models) {
        SeatingStatus.hasMany(models.Seating, {
            foreignKey: 'id_seating_status'
        });
    };

    return SeatingStatus;
}