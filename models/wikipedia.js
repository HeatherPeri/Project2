module.exports = function(sequelize, DataTypes) {
  var wikipedia = sequelize.define("wikipedia", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    search_query: DataTypes.STRING
  });
  return wikipedia;
};
