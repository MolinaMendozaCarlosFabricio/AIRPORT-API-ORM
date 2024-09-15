module.exports= (sequelize, DataTypes)=>{
    const CheckInStatus = sequelize.define('CheckInStatus',{
        
        id_checkIn_status:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement: true
        },
        
        name_status_checkin:{
            type: DataTypes.STRING,
        },

    });
    return CheckInStatus;
};