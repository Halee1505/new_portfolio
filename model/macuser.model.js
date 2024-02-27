const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MacUsers = new Schema({
  email: {
    type: String,
  },
  category: {
    type: String,
  },
  vote: {
    type: Array,
  },
});
module.exports = mongoose.model("macuser", MacUsers);
