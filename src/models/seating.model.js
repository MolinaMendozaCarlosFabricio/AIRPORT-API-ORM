module.exports= (sequelize, DataTypes)=>{
    const Seating = sequelize.define('Seating',{
        seat_number: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        id_type_seat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'TypeSeats',
                key: 'id_type_seat' 
            }
        },
        id_seating_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'SeatingStatuses',
                key: 'id_seating_status' 
            }
        },
        id_seating_area: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'SeatingAreas',
                key: 'id_seating_area' 
            }
        }
    },{ timestamps: false },);

    Seating.associate = function(models) {
        Seating.belongsTo(models.TypeSeats, {
            foreignKey: 'id_type_seat'
        });

        Seating.belongsTo(models.SeatingStatus, {
            foreignKey: 'id_seating_status'
        });

        Seating.belongsTo(models.SeatingAreas, {
            foreignKey: 'id_seating_area'
        });

        Seating.hasOne(models.Passengers, {
            foreignKey: 'seat_number'
        });
    }

    return Seating;
};