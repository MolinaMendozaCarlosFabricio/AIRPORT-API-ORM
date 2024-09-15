module.exports = (sequelize, DataTypes) => {
    const SeatingAreas = sequelize.define('SeatingAreas', {
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

    SeatingAreas.associate = function(models) {
        SeatingAreas.hasMany(models.Seating, {
            foreignKey: 'id_seating_area'
        });
    };

    return SeatingAreas;
}