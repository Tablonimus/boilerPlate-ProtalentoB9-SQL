const { DataTypes } = require("sequelize");

//⚠ SE EXPORTA UNA FUNCIÓN A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ

module.exports = (sequelize) => {
  sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
    },
  }); /* Creamos un modelo/tabla usuario */
};