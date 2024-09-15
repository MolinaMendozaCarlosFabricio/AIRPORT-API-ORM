module.exports = (sequelize, DataTypes) => {
    const ReservationStatus = sequelize.define('ReservationStatus', {
        id_reservation_status: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        status_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timestamps: false },);

    ReservationStatus.associate = function(models) {
        ReservationStatus.hasMany(models.Reservation, {
            foreignKey: 'id_reservation_status'
        });
    };

    return ReservationStatus;
};
