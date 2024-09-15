module.exports= (sequelize, DataTypes)=>{
    const Seating = sequelize.define('Seating',{
        
        seat_number:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },

    });
    return Seating;
};