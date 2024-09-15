module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        reservation_number: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        reservation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        id_flight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Flights',
                key: 'id_flight'
            }
        },
        id_reservation_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ReservationStatuses',
                key: 'id_reservation_status'
            }
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id_user'
            }
        }
    });

    Reservation.associate = function(models) {
        Reservation.belongsTo(models.Flights, {
            foreignKey: 'id_flight'
        });

        Reservation.belongsTo(models.ReservationStatus, {
            foreignKey: 'id_reservation_status'
        });

        Reservation.belongsTo(models.Users, {
            foreignKey: 'id_user'
        });
    };

    return Reservation;
};
