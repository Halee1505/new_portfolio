const mongoose = require("mongoose");
const flashCardDb = mongoose
  .createConnection(process.env.MAIN_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .on("error", console.log)
  .on("disconnected", () => console.log("Database flashcard Disconnected"))
  .once("open", () => console.log("Database flashcard Connected"));


module.exports = flashCardDb;
