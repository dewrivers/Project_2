module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
        Category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Customer_order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
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
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Cart.belongsTo(models.Customer_order, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Cart;
};