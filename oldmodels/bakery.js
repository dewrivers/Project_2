module.exports = function(sequelize, DataTypes) {
    var Bakery = sequelize.define("Bakery", {
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
    return Bakery;
  };
