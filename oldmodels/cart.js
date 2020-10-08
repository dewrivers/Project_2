module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
        Product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Cost: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Cart.associate = function (models) {
        // Associating Customer_order with Cart
        // When an Customer_order is deleted, also delete any associated Cart
        Cart.belongsTo(models.Customer_order, {
            
        });
        Cart.hasMany(models.Category, {
            onDelete: "cascade"
        });
    };


    return Cart;
};