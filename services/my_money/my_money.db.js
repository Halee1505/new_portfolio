const mongoose = require("mongoose");
const myMoneyDb = mongoose
  .createConnection(process.env.MY_MONEY_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .on("error", console.log)
  .on("disconnected", () => console.log("Database my_money Disconnected"))
  .once("open", () => console.log("Database my_money Connected"));


module.exports = myMoneyDb;
