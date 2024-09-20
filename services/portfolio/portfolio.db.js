const mongoose = require("mongoose");
const PortfolioDB = mongoose
  .createConnection(process.env.MAIN_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .on("error", console.log)
  .on("disconnected", () => console.log("Database my_money Disconnected"))
  .once("open", () => console.log("Database my_money Connected"));


module.exports = PortfolioDB;
