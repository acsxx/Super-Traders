const { DataTypes } = require("sequelize");
const db = require("../config/db-connection");

const Shares = db.define("Shares", {
  shareid: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
  },
  rate: {
    type: DataTypes.REAL,
    allowNull: false,
  }
});

module.exports = Shares