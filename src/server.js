const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const startDB = require("./index");
const cors = require("cors");

dotenv.config({ path: "dev.env" });

//create a instance of our web app
const app = express();

//middleware to handle api
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import all reoutes
const errorMiddleware = require("./utils/error");
const customers = require("./routes/CustomerRoutes");

app.use("/api/v1", customers);

//middleware to handle errors
app.use(errorMiddleware);

//connect database and start the application!...
startDB(() => app.listen(process.env.PORT, () => console.log(`server is running in port ${process.env.PORT}`)));

//Handle uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise rejection`);
  server.close(() => process.exit(1));
});
