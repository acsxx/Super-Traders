const { Sequelize } = require("sequelize");

const db = new Sequelize("SuperTraders", process.env.DBUSER, process.env.DBPASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db