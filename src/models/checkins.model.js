module.exports = (sequelize, DataTypes) => {
    const CheckIns = sequelize.define('CheckIns', {
        id_checkin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_check_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CheckInStatuses',
                key: 'id_checkIn_status' 
            }
        }
    });

    CheckIns.associate = function(models) {
        CheckIns.hasMany(models.Passengers, {
            foreignKey: 'id_checkin'
        });

        CheckIns.belongsTo(models.CheckInStatus, {
            foreignKey: 'id_check_status'
        });
    }

    return CheckIns;
};
