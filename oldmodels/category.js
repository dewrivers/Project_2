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

    Category.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Category.belongsTo(models.Cart, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Category;
};