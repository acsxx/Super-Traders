const { DataTypes } = require("sequelize");
const db = require("../config/db-connection");

const Portfolios = db.define("Portfolios", {
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  share_id: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.REAL,
    allowNull: false,
  }
});

module.exports = Portfolios