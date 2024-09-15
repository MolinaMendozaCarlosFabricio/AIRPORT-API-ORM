module.exports = (sequelize, DataTypes) => {
    const CheckInStatus = sequelize.define('CheckInStatus', {
        id_checkIn_status: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_status_checkin: {
            type: DataTypes.STRING,
        }
    },{ timestamps: false },);

    CheckInStatus.associate = function(models) {
        CheckInStatus.hasMany(models.CheckIns, {
            foreignKey: 'id_check_status'
        });
    }

    return CheckInStatus;
};
