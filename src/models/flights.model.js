module.exports= (sequelize, DataTypes)=>{
    const Flights = sequelize.define('Flights',{
        id_flight:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        price_flight:{
            type: DataTypes.DECIMAL,
        },
        arrival_date:{
            type: DataTypes.DATEONLY,
        },
        arrival_time:{
            type: DataTypes.TIME,   
        },
        depature_date:{
            type: DataTypes.DATEONLY,
        },
        depature_time:{
            type: DataTypes.TIME,
        }
    });

    Flights.associate = function(models) {
        Flights.hasMany(models.Reservation, {
            foreignKey: 'id_flight'
        });

        Flights.hasMany(models.Passengers, {
            foreignKey: 'id_flight'
        });
    };

    return Flights;
};