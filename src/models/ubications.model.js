module.exports = (sequelize, DataTypes) => {
    const Ubications = sequelize.define('Ubications', {
        id_ubication: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        airport_name_ubication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Countrys',
                key: 'id_countrys'
            }
        },
        id_states: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'States',
                key: 'id_states'
            }
        },
        id_municipality: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Municipalitys',
                key: 'id_municipality'
            }
        }
    }, { timestamps: false });

    Ubications.associate = function(models) {
        Ubications.belongsTo(models.Countrys, {
            foreignKey: 'country_id'
        });
        Ubications.belongsTo(models.States, {
            foreignKey: 'id_states'
        });
        Ubications.belongsTo(models.Municipalitys, {
            as: 'municipality',
            foreignKey: 'id_municipality'
        });
        Ubications.hasMany(models.Flights, {
            as: 'originFlights',
            foreignKey: 'id_origin'
        });
        Ubications.hasMany(models.Flights, {
            as: 'destinationFlights', 
            foreignKey: 'id_destination'
        });
    };

    return Ubications;
};
