module.exports = function (sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
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

            allowNull: true,
        },
        Lbs: {
            type: DataTypes.INTEGER,

            allowNull: true,
        },
        Category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Img_url: {
            type: DataTypes.STRING,
            allowNull: true
        },

    });
    return Food;
};
