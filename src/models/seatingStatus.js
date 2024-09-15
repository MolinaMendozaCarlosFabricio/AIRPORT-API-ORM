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
    })
    return SeatingStatus;
}