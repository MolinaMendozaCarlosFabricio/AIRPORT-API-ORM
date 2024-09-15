module.exports = (sequelize, DataTypes) =>{
    const Cards = sequelize.define('Cards',{
        id_card:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        card_number:{
            type: DataTypes.BIGINT,
            unique: true,
        },
        due_date:{
            type: DataTypes.DATEONLY
        },
        bank:{
            type: DataTypes.STRING
        },
        //estos de abjo lo tienen como FK y PK
        id_holder:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_user:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }

    });
    
    return Cards;
}