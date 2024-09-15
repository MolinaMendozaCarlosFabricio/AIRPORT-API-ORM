module.exports = (sequelize,DataTypes) => {
    const Holders = sequelize.define('Holders', {
        id_holder: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name_holder: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middle_name_holder: {
            type: DataTypes.STRING,
            allowNull: true
        },
        first_surname_holder: {
            type: DataTypes.STRING,
            allowNull: false
        },
        second_surname_holder: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Holders.associate = function(models) {
        Holders.hasMany(models.Cards, {
            foreignKey: 'holder_id'
        });
    }

    return Holders;
};