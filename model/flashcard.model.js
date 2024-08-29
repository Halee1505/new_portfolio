const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashCard = new Schema({
   word: {
      type: String,
    },
    meaning: {
      type: String,
    },
    word_region: {
      type: String,
    },
    meaning_region: {
      type: String,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },

});

module.exports = mongoose.model("FlashCard", FlashCard)