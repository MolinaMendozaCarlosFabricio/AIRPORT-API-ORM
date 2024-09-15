module.exports = (sequelize, DataTypes) =>{
    const Cards = sequelize.define('Cards',{
        id_card:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        card_number:{
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
        },
        due_date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        bank:{
            type: DataTypes.STRING,
            allowNull: false
        },
        id_holder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Holders',
                key: 'id_holder'
            }
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id_user'
            }
        }
    });

    Cards.associate = function(models) {
        Cards.belongsTo(models.Users, {
            foreignKey: 'id_user'
        });

        Cards.belongsTo(models.Holders, {
            foreignKey: 'holder_id'
        });
    }
    
    return Cards;
}