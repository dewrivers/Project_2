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
    Customer_order.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Customer_order.hasMany(models.Cart, {
          onDelete: "cascade"
        });
      };
    return Customer_order;
};