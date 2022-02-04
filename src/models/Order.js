const Sequelize = require("sequelize");
const db = require("./db");

const Order = db.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  total: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Order;
