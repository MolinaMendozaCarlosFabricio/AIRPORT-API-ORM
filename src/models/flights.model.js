module.exports= (sequelize, DataTypes)=>{
    const Flights = sequelize.define('Flights',{
        
        id_flights:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
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
        },
        depature_date:{
            type: DataTypes.DATEONLY,
        },
    });
    return CheckIns;
};