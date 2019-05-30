module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
