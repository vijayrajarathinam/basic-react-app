const sequalize = require("./models/db");

const Customer = require("./models/Customer");
const Order = require("./models/Order");

Customer.hasMany(Order);

//create the tables
module.exports = function startDB(callback) {
  sequalize
    .sync({ force: true })
    .then((result) => {
      //   console.log(result);

      return Customer.create({ name: "vijay", email: "vijay@gmail.com" });
    })
    .then((customer) => {
      customer.createOrder({ total: 45 });
      callback();
      //   return Order.create({ total: 45 });
    })
    .catch(console.log);
};
