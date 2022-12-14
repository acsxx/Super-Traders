const { DataTypes } = require("sequelize");
const db = require("../config/db-connection");

const Users = db.define("Users", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

module.exports = Users