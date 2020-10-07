module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });
    return Category;
};