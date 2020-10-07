module.exports = function (sequelize, DataTypes) {
    var General_Store = sequelize.define("General_Store", {
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
        Quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 200
        }
    });
    return General_Store;
};