module.exports = function (sequelize, DataTypes) {
    var Fish = sequelize.define("Fish", {
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
    return Fish;
};