const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const flashCardDb = require("./flashcard.db");

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
const FlashCardCategory = new Schema({
  name: {
      type: String,
  },
});
const FlashCardModel = flashCardDb.model("FlashCard", FlashCard);
const FlashCardCategoryModel = flashCardDb.model("FlashCardCategory", FlashCardCategory);

module.exports = {
  FlashCardModel,
  FlashCardCategoryModel,
}