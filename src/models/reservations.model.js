module.exports= (sequelize, DataTypes)=>{
    const Reservations = sequelize.define('Reservations',{
        
        reservation_number:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        
        reservation_date:{
            type: DataTypes.DATEONLY
        
        },

    });
    return Reservations;
};