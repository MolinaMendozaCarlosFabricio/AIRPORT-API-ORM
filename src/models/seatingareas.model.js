module.exports = (sequelize, DataTypes) => {
    const SeatingAreas = ('SeatingAreas', {
        id_seating_area: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        location_place_sa: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return SeatingAreas;
}