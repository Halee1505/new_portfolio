const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PortfolioDB = require("./portfolio.db");
// Define collection and schema for Business
const PortfolioImageModel = new Schema({
  gallery: String,
  path: Array,
});

module.exports = PortfolioDB.model("Collection", PortfolioImageModel);
