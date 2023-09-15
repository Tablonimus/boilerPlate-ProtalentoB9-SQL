/* SEQUELIZE */
/* Conexión y configuración de sequelize */
const { Sequelize } = require("sequelize"); //importo el modulo de sequelize

const UserModel = require("./Models/User"); //importar todos mis modelos aqui
const ProductModel = require("./Models/Product"); //importar todos mis modelos aqui

const sequelize = new Sequelize(
  "postgres://postgres:1234@localhost:5432/tarea"
); // creamos una INSTANCIA de sequelize con nuestras CREDENCIALES

/* Sincronizar mis modelos */
UserModel(sequelize);
ProductModel(sequelize);

/* Aca van las relaciones */
const { User, Product } = sequelize.models; //separo los models [{User},{Product},{Messages}]
/* aca puedo hacer relaciones */
//User.hasMany(Products)

module.exports = { sequelize, ...sequelize.models };
