const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let vote = new Schema({
  category: {
    type: String,
  },
  counts: {
    type: Number,
  },
});
let Macs = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  artist: {
    type: String,
  },
  location: {
    type: String,
  },
  duration: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  link: {
    type: String,
  },
  vote_counts: {
    type: [vote],
  },
});

module.exports = mongoose.model("mac", Macs);
