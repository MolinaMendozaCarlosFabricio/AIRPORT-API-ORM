module.exports= (sequelize, DataTypes)=>{
    const CheckIns = sequelize.define('CheckIns',{
        
        id_checkin:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false
        },

    });
    return CheckIns;
};