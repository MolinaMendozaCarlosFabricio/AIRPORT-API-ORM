module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middle_name_user: {
            type: DataTypes.STRING,
            allowNull: true
        },
        first_surname_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        second_surname_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_user:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password_user: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Users;
};