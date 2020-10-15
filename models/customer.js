module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        Whole_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Phone_number: {
            type: DataTypes.STRING,

            allowNull: false,
        },
    });
    return Customer;
};