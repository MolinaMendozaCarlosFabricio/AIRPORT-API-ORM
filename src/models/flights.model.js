module.exports= (sequelize, DataTypes)=>{
    const Flights = sequelize.define('Flights',{
        id_flight:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        price_flight:{
            type: DataTypes.DECIMAL(10,2),
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
        },
        id_origin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Ubications',
                key: 'id_ubication'
            }
        },
        id_destination: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Ubications',
                key: 'id_ubication'
            }
        }
    },{ timestamps: false },);

    Flights.associate = function(models) {
        Flights.belongsTo(models.Ubications, {
            foreignKey: 'id_origin'
        });
        
        Flights.belongsTo(models.Ubications, {
            foreignKey: 'id_destination'
        });

        Flights.hasMany(models.Reservation, {
            foreignKey: 'id_flight'
        });

        Flights.hasMany(models.Passengers, {
            foreignKey: 'id_flight'
        });
    };

    return Flights;
};