module.exports = function (sequelize, DataTypes) {
    var Customer_order = sequelize.define("Customer_order", {
        First_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Phone_number: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
    });
    Customer_order.associate = function (models) {
        // Associating Customer_order with Cart
        // When an Customer_order is deleted, also delete any associated Cart
        Customer_order.hasMany(models.Cart, {
            onDelete: "cascade"
        });
        
    };
    return Customer_order;
};