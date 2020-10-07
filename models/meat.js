module.exports = function (sequelize, DataTypes) {
    var Meat = sequelize.define("Meat", {
        Product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Lbs: {
            type: DataTypes.INTEGER,
            defaultValue: 200
        }
    });
    return Meat;
};