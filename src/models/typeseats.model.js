module.exports = (sequelize,DataTypes) => {
    const TypeSeats = sequelize.define('TypeSeats', {
        id_type_seat: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        seat_class_ts: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timestamps: false },);

    TypeSeats.associate = function(models) {
        TypeSeats.hasMany(models.Seating, {
            foreignKey: 'id_type_seat'
        });
    }

    return TypeSeats;
};